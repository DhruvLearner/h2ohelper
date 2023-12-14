import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateDailyGoal, updateWaterUnit } from '../../../../Redux/slice/water_amount_slice';
import Colors, {lightTheme , darkTheme} from '../../../../colors';

export default function EditWaterGoalSheet(props) {
  const selectedUnit = useSelector((state) => state.dailyWaterGoal.waterMainUnit);
  const [colors, setColors] = useState(null);
  const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
    useEffect(() => {
        if (isDarkTheme == true) {
            setColors(darkTheme)
        }else{
            setColors(lightTheme)
        }
    }, [isDarkTheme]);
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
      <Text style={[styles.headerText,{color: colors?.secondaryText}]}>Edit Your Daily Goal</Text>
      <Text style={[styles.staticText, { color: colors?.thirdText}]}>
        Amount (ml):
      </Text>
      <View style={styles.inputContainer}>
       <View style={{display:'flex', flexDirection:'column'}}>
        <TextInput
          style={[
            styles.input,
            {color:colors?.secondaryText },
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
              styles.mlBtnStyle,{backgroundColor: colors?.genderBtn},
              selectedUnit === 'ml' && {backgroundColor: isDarkTheme == 1 ? colors?.secondaryText : colors?.primaryColor},
            ]}
            onPress={() => handleUnitChange('ml')}
          >
            <Text style={selectedUnit == 'ml' ? (styles.selectedBtnText,{color: colors?.white}) : (styles.mlBtnText,{color : colors?.lightGray})}>ml</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.literBtnStyle, {backgroundColor: colors?.genderBtn},
              selectedUnit === 'liter' && {backgroundColor: isDarkTheme == 1 ? colors?.secondaryText : colors?.primaryColor} ,
            ]}
            onPress={() => handleUnitChange('liter')}
          >
            <Text style={  selectedUnit == 'liter' ? (styles.selectedBtnText,{color: colors?.white}) : (styles.literBtnText,{color : colors?.lightGray})}>liter</Text>
          </TouchableOpacity>
        </View>
        {error && <Text></Text>} 
        </View>
      </View>
      <TouchableOpacity style={[styles.submitButton,{backgroundColor: colors?.backgroundColor}]} onPress={handleSubmit}>
        <Text style={[styles.buttonText,{color: colors?.lightColor}]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    fontFamily: '',
    fontWeight: '600',
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
    borderColor: 'red',
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
    padding: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  literBtnStyle: {
    padding: 8,
    borderRadius: 4,
  },
  selectedUnitButton: {
  },
  selectedBtnText: {
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
    
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {    
    fontSize: 18,
    marginHorizontal: 55,
    fontFamily: '',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  staticText: {
    fontSize: 16,
    fontFamily: '',
    marginRight: 10,
  },
});
