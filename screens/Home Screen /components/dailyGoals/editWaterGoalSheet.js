import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateDailyGoal } from '../../../../Redux/slice/water_amount_slice';
export default function EditWaterGoalSheet(props) {
const [number, setNumber] = useState('');
  const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
  const handleNumberChange = (text) => {
    // Ensure the input is numeric (you can add more validation)
    if (/^\d+$/.test(text) || text === '') {
      setNumber(text);
    }else if(text == undefined){
      setNumber(dailyWaterGoal.toString());
    }
  }

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(updateDailyGoal(number));
    props.listenEvent('close')
  }

  useEffect(() => {
    setNumber(dailyWaterGoal.toString());
  }, [dailyWaterGoal]);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter a Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNumberChange}  // Remove the parentheses
        value={number}
        keyboardType='number-pad'
        />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
      fontSize: 20,
      marginBottom: 10,
    },
    input: {
      width: 200,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    submitButton: {
        backgroundColor: '#007bff', // Blue color
        borderRadius: 5,
        padding: 10,
        color: '#FFFFFF'
      },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    resultText: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });