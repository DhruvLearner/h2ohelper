import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import WaterScreen from './components/waterScreen/waterScreen'
import EditDailyGoals from './components/dailyGoals/editDailyGoals'
import { useSelector, useDispatch } from 'react-redux';


export default function HomeScreen() {

  const dispatch = useDispatch();
  const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
  const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);

  // const handleUpdateWater = () => {
  //     dispatch(updateDrunkWater(700)); 
  // };


  return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
            <WaterScreen dailyGoal={dailyWaterGoal}></WaterScreen>
            <EditDailyGoals dailyGoal={dailyWaterGoal} dailyWaterUnit={dailyWaterUnit}></EditDailyGoals>
        </ScrollView>
      </View>
  )
}

