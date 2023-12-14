import { ScrollView, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { styles } from './style'
import WaterScreen from './components/waterScreen/waterScreen'
import EditDailyGoals from './components/dailyGoals/editDailyGoals'
import { useSelector, useDispatch } from 'react-redux';
import RetrieveData, { fetchDarkThemeSetting, fetchUserInfo } from '../../database/localstorage'
import { updateWaterData, getHistoryInsightArray, updateHistoryInsight } from '../../Redux/slice/water_amount_slice'
import HistoryWaterLog from './components/historyWaterLog/history_water_log'
import { fetchNotificationData } from '../../database/localstorage'
import { setNotificationTime, updateDarkThemeSetting, updateUserInfo } from '../../Redux/slice/setting_slice'
import HistoryInsight from './components/Hydration History Insight/history_insight'
import { darkTheme, lightTheme } from  '../../colors';

export default function HomeScreen() {
  const [colors, setColors] = useState(null);
  const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
    useEffect(() => {
        if (isDarkTheme == true) {
            setColors(darkTheme)
        }else{
            setColors(lightTheme)
        }
    }, [isDarkTheme]);
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

      const isDarkTheme = await fetchDarkThemeSetting();
      
      dispatch(updateDarkThemeSetting(isDarkTheme));

    };
    fetchData();
  }, [dailyWaterIntake]);

  fetchUserInfo().then((user)=>{
    user && dispatch(updateUserInfo(JSON.parse(user)))
  });

  return (
      <View style={[styles.container,{backgroundColor:colors?.homeScreenenBg}]}>
        <ScrollView style={{ flex: 1 }}>
            <WaterScreen></WaterScreen>
            <EditDailyGoals dailyGoal={dailyWaterGoal} dailyWaterUnit={dailyWaterUnit} dailyWaterMainUnit={dailyWaterMainUnit}></EditDailyGoals>
            <HistoryWaterLog></HistoryWaterLog>
            <HistoryInsight></HistoryInsight>
          </ScrollView>
      </View>
  )
}

