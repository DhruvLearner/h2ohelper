import { ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './style'
import WaterScreen from './components/waterScreen/waterScreen'
import EditDailyGoals from './components/dailyGoals/editDailyGoals'
import { useSelector, useDispatch } from 'react-redux';
import RetrieveData from '../../database/localstorage'
import { updateWaterData } from '../../Redux/slice/water_amount_slice'
import HistoryWaterLog from './components/historyWaterLog/history_water_log'
import { fetchNotificationData } from '../../database/localstorage'
import { setNotificationTime } from '../../Redux/slice/setting_slice'

export default function HomeScreen() {
  
  const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
  const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);
  const dailyWaterIntake = useSelector((state) => state.dailyWaterGoal.dailyWaterIntake);
  const dailyWaterMainUnit = useSelector((state) => state.dailyWaterGoal.waterMainUnit);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await RetrieveData();
      data && dispatch(updateWaterData(data))
    
      const fetchNotificationTime = await fetchNotificationData();
      fetchNotificationTime && dispatch(setNotificationTime(fetchNotificationTime))
      console.log("FetchNotificationTime > ", fetchNotificationTime)
    };
    fetchData();
  }, [dailyWaterIntake]);

  return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
            <WaterScreen dailyGoal={dailyWaterGoal}></WaterScreen>
            <EditDailyGoals dailyGoal={dailyWaterGoal} dailyWaterUnit={dailyWaterUnit} dailyWaterMainUnit={dailyWaterMainUnit}></EditDailyGoals>
            <HistoryWaterLog></HistoryWaterLog>
          </ScrollView>
      </View>
  )
}

