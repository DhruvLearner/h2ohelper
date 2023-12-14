import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { styles } from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import EditWaterGoalSheet from './editWaterGoalSheet';
import { _convertedWater } from '../waterScreen/water_screen_content';
import Colors, {lightTheme , darkTheme} from '../../../../colors';
import { useSelector } from 'react-redux';

export default function EditDailyGoals(props) {
  const refRBSheet = useRef();
  const [colors, setColors] = useState(null);
  const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
    useEffect(() => {
        if (isDarkTheme == true) {
            setColors(darkTheme)
        }else{
            setColors(lightTheme)
        }
    }, [isDarkTheme]);
  const updateBottomSheetState = (state) => {
    if (state == 'open') {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={[styles.headerText,{color: colors?.primaryText}]}>Your Daily Goal</Text>
        <TouchableOpacity onPress={() => updateBottomSheetState('open')}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container,{color: colors?.blackNwhite,backgroundColor: colors?.screen2Bg}]}>
        {props.dailyGoal === 0 ? (
          <Text style={styles.setGoalMsgText}>Set Your Daily Goal</Text>
        ) : (
          <Text style={[styles.goalText,{color: colors?.lightColor}]}>
            {_convertedWater(props.dailyGoal,props.dailyWaterMainUnit)}{props.dailyWaterMainUnit}
          </Text>
        )}
        <TouchableOpacity style={styles.editBtn} onPress={() => updateBottomSheetState('open')}>
          <Text style={styles.editText2}>{props.dailyGoal === 0 ? 'Add' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            borderRadius: 12,
            backgroundColor: colors?.bottomSheet
          },
          wrapper: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          draggableIcon: {
            backgroundColor: isDarkTheme == 1 ? colors?.thirdText : colors?.blackNwhite,
          },
        }}
      >
        <EditWaterGoalSheet listenEvent={updateBottomSheetState} />
      </RBSheet>
    </View>
  );
}
