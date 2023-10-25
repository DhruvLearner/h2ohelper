import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateDailyGoal, updateWaterUnit } from '../../../../Redux/slice/water_amount_slice';
import Colors from '../../../../colors';

export default function EditWaterGoalSheet(props) {
  const selectedUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);
  const [number, setNumber] = useState('');
  const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
  const handleNumberChange = (text) => {
    if (/^\d+$/.test(text) || text === '') {
      setNumber(text);
    } else if (text == undefined) {
      setNumber(dailyWaterGoal.toString());
    }
  }

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateDailyGoal(number));
    props.listenEvent('close');
  }

  const handleUnitChange = (value) => {
    setSelectedUnit(value);
    dispatch(updateWaterUnit(value));
  };

  useEffect(() => {
    setNumber(dailyWaterGoal.toString());
  }, [dailyWaterGoal]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Edit Your Daily Goal</Text>
      <Text style={styles.staticText}>
        {selectedUnit === 'ml' ? 'Amount (ml): ' : 'Amount (liter): '}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleNumberChange}
          value={number}
          keyboardType='number-pad'
          placeholder="Enter amount"
        />
        <View style={styles.switchMainCon}>
          <TouchableOpacity
            style={[
              styles.mlBtnStyle,
              selectedUnit === 'ml' && styles.selectedUnitButton,
            ]}
            onPress={() => handleUnitChange('ml')}
          >
            <Text style={styles.mlBtnText}>ml</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[
              styles.literBtnStyle,
              selectedUnit === 'liter' ,
            ]}
            onPress={() => handleUnitChange('liter')}
          >
            <Text style={styles.literBtnText}>liter</Text>
          </TouchableOpacity> */}
        </View>
        {/* <Switch
          value={selectedUnit === 'liter'}
          onValueChange={(value) => handleUnitChange(value ? 'liter' : 'ml')}
        /> */}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: 150,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  switchMainCon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mlBtnStyle: {
    backgroundColor: Colors.primaryColor,
    padding: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  literBtnStyle: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
  },
  selectedUnitButton: {
    backgroundColor: Colors.primaryColor,
  },
  mlBtnText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  literBtnText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  input: {
    width: 150,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  submitButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 8,
    padding: 10,
    color: '#FFFFFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 55,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  staticText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    marginRight: 10,
  },
});
