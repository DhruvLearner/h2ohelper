import { ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './style'
import WaterScreen from './components/waterScreen/waterScreen'
import EditDailyGoals from './components/dailyGoals/editDailyGoals'
import { useSelector, useDispatch } from 'react-redux';
import RetrieveData, { fetchUserInfo } from '../../database/localstorage'
import { updateWaterData, getHistoryInsightArray, updateHistoryInsight } from '../../Redux/slice/water_amount_slice'
import HistoryWaterLog from './components/historyWaterLog/history_water_log'
import { fetchNotificationData } from '../../database/localstorage'
import { setNotificationTime, updateUserInfo } from '../../Redux/slice/setting_slice'
import HistoryInsight from './components/Hydration History Insight/history_insight'


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

      const historyInsightObj = await getHistoryInsightArray();
      dispatch(updateHistoryInsight(historyInsightObj));

    };
    fetchData();
  }, [dailyWaterIntake]);

  fetchUserInfo().then((user)=>{
    user && dispatch(updateUserInfo(JSON.parse(user)))
  });

  return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
            <WaterScreen></WaterScreen>
            <EditDailyGoals dailyGoal={dailyWaterGoal} dailyWaterUnit={dailyWaterUnit} dailyWaterMainUnit={dailyWaterMainUnit}></EditDailyGoals>
            <HistoryWaterLog></HistoryWaterLog>
            <HistoryInsight></HistoryInsight>
          </ScrollView>
      </View>
  )
}

