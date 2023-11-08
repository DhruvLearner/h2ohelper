import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { styles } from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import EditWaterGoalSheet from './editWaterGoalSheet';
import { _convertedWater } from '../waterScreen/water_screen_content';
export default function EditDailyGoals(props) {
  const refRBSheet = useRef();

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
        <Text style={styles.headerText}>Your Daily Goal</Text>
        <TouchableOpacity onPress={() => updateBottomSheetState('open')}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {props.dailyGoal === 0 ? (
          <Text style={styles.setGoalMsgText}>Set Your Daily Goal</Text>
        ) : (
          <Text style={styles.goalText}>
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
          },
          wrapper: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          draggableIcon: {
            backgroundColor: "black",
          },
        }}
      >
        <EditWaterGoalSheet listenEvent={updateBottomSheetState} />
      </RBSheet>
    </View>
  );
}
