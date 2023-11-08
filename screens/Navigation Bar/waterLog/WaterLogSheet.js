import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react';
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { addWater } from '../../../Redux/slice/water_amount_slice';

const mlValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

export default function WaterLogSheetContainer(props) {
  const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);
  const dispatch = useDispatch();

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
    <View style={styles.sheetContainer}>
      <View style={styles.selectedValueContainer}>
        <Text style={styles.selectedValueText}>
          {selectedValue ? `Selected Value: ${selectedValue}${dailyWaterUnit}` : 'Select Value'}
        </Text>
      </View>
      {mlValues.map((mlValue, index) => (
        <TouchableOpacity key={index} onPress={() => _waterLog(mlValue)}>
          <View style={[
            styles.addWater,
            selectedValue === mlValue && styles.selectedValue
          ]}>
            <Text style={[
              styles.mlText,
              selectedValue === mlValue && styles.selectedText
            ]}>
              {mlValue}{dailyWaterUnit}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[
          styles.submitButton,
          isSubmitDisabled && styles.disabledSubmitButton
        ]}
        onPress={_addWater}
        disabled={isSubmitDisabled}
      >
        <Text style={[
          styles.buttonText,
          isSubmitDisabled && styles.disabledButtonText
        ]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
