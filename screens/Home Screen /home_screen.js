import { ScrollView, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import WaterScreen from './components/waterScreen/waterScreen'
import EditDailyGoals from './components/dailyGoals/editDailyGoals'
import { useSelector, useDispatch } from 'react-redux';
import RetrieveData from '../../database/localstorage'
import { updateWaterData } from '../../Redux/slice/water_amount_slice'
export default function HomeScreen() {

  const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
  const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await RetrieveData();
      console.log(data,'data')
      data && dispatch(updateWaterData(data))
    };
    fetchData();
  }, []);
  return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
            <WaterScreen dailyGoal={dailyWaterGoal}></WaterScreen>
            <EditDailyGoals dailyGoal={dailyWaterGoal} dailyWaterUnit={dailyWaterUnit}></EditDailyGoals>
        </ScrollView>
      </View>
  )
}

