import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
    try {
        await AsyncStorage.setItem('dailyGoal', tempDailyGoal.toString());
        await AsyncStorage.setItem('dailyWaterIntake', tempDailyWaterIntake.toString());
        await AsyncStorage.setItem('waterUnit', tempWaterUnit);
    } catch (error) {
        console.error('Error storing data: ' + error);
    }
};

export const _updateDailyGoalStorage = async (dailyGoal) => {
    try {
        await AsyncStorage.setItem('dailyGoal', dailyGoal.toString());
    } catch (error) {
        console.error('Error storing data for dailyGoal: ' + error);
    }
}

export const _updateDailyWaterIntakeStorage = async (dailyWaterIntake) => {
    try {
        await AsyncStorage.setItem('dailyWaterIntake', dailyWaterIntake.toString());
    } catch (error) {
        console.error('Error storing data for dailyWaterIntake: ' + error);
    }
}

export const _updateWaterUnitStorage = async (waterUnit) => {
    try {
        await AsyncStorage.setItem('waterUnit', waterUnit.toString());
    } catch (error) {
        console.error('Error storing data for waterUnit: ' + error);
    }
}

export const _updateWaterlogHistoryStorage =async (water) => {
    try {
        

        await AsyncStorage.setItem('waterlogHistory', water.toString());
    } catch (error) {
        console.error('Error storing data for waterlogHistory: ' + error);
    }
}
export const _updateNotificationPreference = async (preference) => {
    try {
        await AsyncStorage.setItem('notificationPreference', preference.toString());
    } catch (error) {
        console.error('Error storing data for notificationPreference: ' + error);
    }
}
export const _updateNotificationTime = async (time) => {
    try {
        await AsyncStorage.setItem('notificationTime', time.toString());
    } catch (error) {
        console.error('Error storing data for notificationTime: ' + error);
    }
}

export async function fetchNotificationData() {
    try {
        const notificationTime = await AsyncStorage.getItem('notificationTime');

        if (notificationTime) {

            return notificationTime;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export async function fetchUserInfo() {
    try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export async function fetchDarkThemeSetting() {
    try {
        const isDarkTheme = await AsyncStorage.getItem('isDarkTheme');

        if (isDarkTheme == "true") {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return null;
    }
}


export async function _updateUserInfo(user) {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.error('Error storing data for user info: ' + error);
    }
}

export async function _updateDarkThemeSetting(isDarkTheme) {
    try {
        await AsyncStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    } catch (error) {
        console.error('Error storing data for dark theme settings: ' + error);
    }
}


export async function fetchWaterLogHistory() {
    try {

        const waterlogHistory = await AsyncStorage.getItem('waterlogHistory');
        
        // waterlogHistory = waterlogHistory ? JSON.parse(waterlogHistory) : {};
       
        return waterlogHistory;

    } catch (error) {

        return null; // Handle the error and return an appropriate value
    }
}

export default async function RetrieveData() {
    try {
        const dailyGoal = await AsyncStorage.getItem('dailyGoal');
        const dailyWaterIntake = await AsyncStorage.getItem('dailyWaterIntake');
        const waterUnit = await AsyncStorage.getItem('waterUnit');
        const waterlogHistory = await AsyncStorage.getItem('waterlogHistory');

        if (dailyGoal || dailyWaterIntake || waterUnit || waterlogHistory) {
            const retrievedData = {
                tempDailyGoal: dailyGoal || 0,
                tempDailyWaterIntake: dailyWaterIntake || 0,
                tempWaterUnit: waterUnit || 'ml',
                waterlogHistory: waterlogHistory ? JSON.parse(waterlogHistory) : {},

            };
            return retrievedData;
        } else {

            return null; // Return null or an appropriate value if no data is found
        }
    } catch (error) {

        return null; // Handle the error and return an appropriate value
    }
}

export async function RetrieveWaterLogHistory() {
    try {
        const waterlogHistory = await AsyncStorage.getItem('waterlogHistory');

        if (waterlogHistory) {
            return waterlogHistory || null;
        } else {

            return null; // Return null or an appropriate value if no data is found
        }
    } catch (error) {
        console.error('Error retrieving data: ' + error);
        return null; // Handle the error and return an appropriate value
    }
}
