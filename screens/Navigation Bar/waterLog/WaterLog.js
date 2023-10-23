import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { addWater } from '../../../Redux/slice/water_amount_slice';
const mlValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
export default function WaterLogSheetContainer(props) {
  const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);
  const dispatch = useDispatch();
  const _waterLog=(mlValue)=>{
    dispatch(addWater(mlValue)); 
    props.listenEvent('close')
  }
  return (
   <View style={styles.sheetContainer}>
    {mlValues.map((mlValue, index) => (
        <TouchableOpacity key={index} onPress={(event)=>{_waterLog(mlValue)}}>
          <View style={styles.addWater}>
            <Text style={styles.mlText}>{mlValue}{dailyWaterUnit}</Text>
          </View> 
        </TouchableOpacity>
    ))}
   </View>
  )
}