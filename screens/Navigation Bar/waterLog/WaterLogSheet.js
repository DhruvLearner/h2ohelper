import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState , useEffect} from 'react';
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { addWater } from '../../../Redux/slice/water_amount_slice';
import { lightTheme, darkTheme } from '../../../colors';
const mlValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

export default function WaterLogSheetContainer(props) {
  const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);
  const dispatch = useDispatch();
  const [colors, setColors] = useState(null);
  const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
  useEffect(() => {
    if (isDarkTheme == true) {
      setColors(darkTheme)
    }else{
      setColors(lightTheme)
    }
  }, [isDarkTheme]);
  const [selectedValue, setSelectedValue] = useState(null);

  
  const _waterLog = (mlValue) => {
    setSelectedValue(mlValue);
  }

  const _addWater = () => {
    if (selectedValue !== null) {
      dispatch(addWater(selectedValue));
      props.listenEvent('close');
    }
  }

  // Determine if the "Submit" button should be disabled
  const isSubmitDisabled = selectedValue === null;

  return (
    <View style={[styles.sheetContainer,{backgroundColor:colors?.bottomsheet}]}>
      <View style={styles.selectedValueContainer}>
        <Text style={[styles.selectedValueText,{color:colors?.secondaryText}]}>
          {selectedValue ? `Selected Value: ${selectedValue}${dailyWaterUnit}` : 'Select Value'}
        </Text>
      </View>
      {mlValues.map((mlValue, index) => (
        <TouchableOpacity key={index} onPress={() => _waterLog(mlValue)}>
          <View style={[
            styles.addWater,
            selectedValue === mlValue && (styles.selectedValue ,  { backgroundColor: isDarkTheme == 1 ? colors?.secondaryColor : colors?.blackNwhite, borderColor: colors?.darkColor, color: isDarkTheme == 1 ? colors?.darkColor : colors?.whiteNblack })
          ]}>
            <Text style={[
              styles.mlText,{color: colors?.darkColor},
              selectedValue === mlValue && { color: isDarkTheme == 1 ? colors?.darkColor : colors?.whiteNblack }
            ]}>
              {mlValue}{dailyWaterUnit}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[
          styles.submitButton,{backgroundColor: colors?.secondaryColor },
          isSubmitDisabled && styles.disabledSubmitButton
        ]}
        onPress={_addWater}
        disabled={isSubmitDisabled}
      >
        <Text style={[
          styles.buttonText, {color: colors?.primaryText},
          isSubmitDisabled && (styles.disabledButtonText,{color: colors?.lightColor})
        ]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
