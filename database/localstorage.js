import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
    try {
      await AsyncStorage.setItem('dailyGoal', tempDailyGoal.toString());
      await AsyncStorage.setItem('dailyWaterIntake', tempDailyWaterIntake.toString());
      await AsyncStorage.setItem('waterUnit', tempWaterUnit);
      console.log('Data stored successfully.');
    } catch (error) {
      console.error('Error storing data: ' + error);
    }
  };
  
export const _updateDailyGoalStorage=async (dailyGoal)=>{
    try {
        await AsyncStorage.setItem('dailyGoal', dailyGoal.toString());
    } catch (error) {
        console.error('Error storing data for dailyGoal: ' + error);
    }
}  

export const _updateDailyWaterIntakeStorage=async (dailyWaterIntake)=>{
    try {
        await AsyncStorage.setItem('dailyWaterIntake', dailyWaterIntake.toString());
    } catch (error) {
        console.error('Error storing data for dailyWaterIntake: ' + error);
    }
}  

export const _updateWaterUnitStorage=async (waterUnit)=>{
    try {
        await AsyncStorage.setItem('waterUnit', waterUnit.toString());
    } catch (error) {
        console.error('Error storing data for waterUnit: ' + error);
    }
} 

export const _updateWaterlogHistoryStorage=async (water)=>{
    try {
        await AsyncStorage.setItem('waterlogHistory', water.toString());
    } catch (error) {
        console.error('Error storing data for waterlogHistory: ' + error);
    }
}
export const _updateNotificationPreference=async (preference)=>{
    try {
        await AsyncStorage.setItem('notificationPreference', preference.toString());
    } catch (error) {
        console.error('Error storing data for notificationPreference: ' + error);
    }
} 
export const _updateNotificationTime=async (time)=>{
    try {
        await AsyncStorage.setItem('notificationTime', time.toString());
    } catch (error) {
        console.error('Error storing data for notificationTime: ' + error);
    }       
} 


export default async function RetrieveData() {
    try {
        const dailyGoal = await AsyncStorage.getItem('dailyGoal');
        const dailyWaterIntake = await AsyncStorage.getItem('dailyWaterIntake');
        const waterUnit = await AsyncStorage.getItem('waterUnit');
        const waterlogHistory = await AsyncStorage.getItem('waterlogHistory');
        console.log(typeof waterlogHistory, "WATERLOGHIS",waterlogHistory )

        if (dailyGoal || dailyWaterIntake ||  waterUnit || waterlogHistory) {
            const retrievedData = {
                tempDailyGoal: dailyGoal||0,
                tempDailyWaterIntake: dailyWaterIntake||0,
                tempWaterUnit: waterUnit||'ml',
                waterlogHistory: waterlogHistory  ? JSON.parse(waterlogHistory) : {} 
            };
            return retrievedData;
        } else {
            console.log('No data found for one or more keys.');
            return null; // Return null or an appropriate value if no data is found
        }
    } catch (error) {
        console.error('Error retrieving data: ' + error);
        return null; // Handle the error and return an appropriate value
    }
}

export async function RetrieveWaterLogHistory() {
    try {
        const waterlogHistory = await AsyncStorage.getItem('waterlogHistory');
        
        if (waterlogHistory) {
            console.log(waterlogHistory,'waterlogHistory')
            return waterlogHistory || null;
        } else {
            console.log('No data found for one or more keys.');
            return null; // Return null or an appropriate value if no data is found
        }
    } catch (error) {
        console.error('Error retrieving data: ' + error);
        return null; // Handle the error and return an appropriate value
    }
}
