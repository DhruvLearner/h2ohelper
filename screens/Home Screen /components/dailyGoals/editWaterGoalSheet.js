import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateDailyGoal, updateWaterUnit } from '../../../../Redux/slice/water_amount_slice';
import Colors from '../../../../colors';

export default function EditWaterGoalSheet(props) {
  const selectedUnit = useSelector((state) => state.dailyWaterGoal.waterMainUnit);
  
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
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
    if (number === '') {
      setError('Please enter a value'); // Set the error message
    } else {
      dispatch(updateDailyGoal(number));
      props.listenEvent('close');
    }
   
  }

  const handleUnitChange =  (value) => {
     dispatch(updateWaterUnit(value));
    };

  useEffect(() => {
  }, [selectedUnit]);

  useEffect(() => {
    setNumber(dailyWaterGoal.toString());
  }, [dailyWaterGoal]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Edit Your Daily Goal</Text>
      <Text style={styles.staticText}>
        Amount (ml):
      </Text>
      <View style={styles.inputContainer}>
       <View style={{display:'flex', flexDirection:'column'}}>
        <TextInput
          style={[
            styles.input,
            error && { borderColor: 'red' }
          ]}
          onChangeText={handleNumberChange}
          value={number}
          keyboardType='number-pad'
          placeholder="Enter amount"
        />
        {error && <Text style={styles.errorText}>{error}</Text>} 
        </View>
        <View style={{display:'flex', flexDirection:'column'}}>
        <View style={styles.switchMainCon}>
          <TouchableOpacity
            style={[
              styles.mlBtnStyle,
              selectedUnit === 'ml' && styles.selectedUnitButton,
            ]}
            onPress={() => handleUnitChange('ml')}
          >
            <Text style={selectedUnit == 'ml' ? styles.selectedBtnText : styles.mlBtnText}>ml</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.literBtnStyle,
              selectedUnit === 'liter' && styles.selectedUnitButton ,
            ]}
            onPress={() => handleUnitChange('liter')}
          >
            <Text style={  selectedUnit == 'liter' ? styles.selectedBtnText : styles.literBtnText}>liter</Text>
          </TouchableOpacity>
        </View>
        {error && <Text></Text>} 
        </View>
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
    fontFamily: '',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignContent:'flex-start',
    
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
    backgroundColor: 'white',
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
  selectedBtnText: {
    color: '#ffffff',
    fontFamily: '',
    fontSize: 16,
  },
  errorText:{
    color:'red',
    marginHorizontal:10,
    padding:0
  },
  mlBtnText: {
    fontFamily: '',
    fontSize: 16,
  },
  literBtnText: {
    fontFamily: '',
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
    backgroundColor: Colors.secondaryColor,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 55,
    fontFamily: '',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  staticText: {
    fontSize: 16,
    fontFamily: '',
    color: 'black',
    marginRight: 10,
  },
});
