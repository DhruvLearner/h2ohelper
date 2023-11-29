import { createSlice } from "@reduxjs/toolkit";
import { _updateDailyGoalStorage, _updateDailyWaterIntakeStorage, _updateWaterUnitStorage, _updateWaterlogHistoryStorage, fetchWaterLogHistory } from "../../database/localstorage";
import { _convertedWater } from "../../screens/Home Screen /components/waterScreen/water_screen_content";
var tempDailyGoal = 0;
var tempDailyWaterIntake = 0;
var tempWaterUnit = "ml";


const initialState = {
    dailyWaterGoal: tempDailyGoal,
    waterUnit: tempWaterUnit,
    waterMainUnit: tempWaterUnit,
    dailyWaterIntake: tempDailyWaterIntake,
    drunkWaterPer: tempDailyGoal == 0 ? 0 : ((tempDailyWaterIntake / tempDailyGoal) * 100).toFixed(2),
    waterlogHistory: {},
    waterloggedDates:[],
    waterloggedAmounts:[]
}

const dailyWaterGoalSlice = createSlice({
    name: 'H2Ohelper',
    initialState,
    reducers: {
        updateWaterData: (state, action) => {
            console.log(action.payload.tempWaterUnit, 'c')
            state.dailyWaterGoal = action.payload.tempDailyGoal;
            state.waterMainUnit = action.payload.tempWaterUnit || 'ml';
            state.waterUnit = 'ml';
            state.dailyWaterIntake = action.payload.tempDailyWaterIntake;
            state.waterlogHistory = action.payload.waterlogHistory;
            state.drunkWaterPer = _updateWaterPercentage(state.dailyWaterIntake, state.dailyWaterGoal)

        },
        updateDailyGoal: (state, action) => {
            // Update Daily Goal
            state.dailyWaterGoal = parseFloat(action.payload);
            state.drunkWaterPer = _updateWaterPercentage(state.dailyWaterIntake, state.dailyWaterGoal)
            _updateDailyGoalStorage(state.dailyWaterGoal);
        },

        addWater: (state, action) => {

            let loggedWater = action.payload;
            // Update water intake
            state.dailyWaterIntake = parseFloat(state.dailyWaterIntake) + parseFloat(loggedWater);
            //Update percentage of daily water
            state.drunkWaterPer = _updateWaterPercentage(state.dailyWaterIntake, state.dailyWaterGoal);
            _updateDailyWaterIntakeStorage(state.dailyWaterIntake);

            // Add Water History
            manageWaterLogHistory(state, state.waterlogHistory, loggedWater, 'add')

        },
        removeWater: (state, action) => {
            let loggedWater = action.payload.loggedWater;
            let removeWaterTimeStamp = action.payload.timeStamp;
            // Update water intake
            state.dailyWaterIntake = parseFloat(state.dailyWaterIntake) - parseFloat(loggedWater);
            //Update percentage of daily water
            state.drunkWaterPer = _updateWaterPercentage(state.dailyWaterIntake, state.dailyWaterGoal);
            _updateDailyWaterIntakeStorage(state.dailyWaterIntake);

            // Add Water History
            manageWaterLogHistory(state, state.waterlogHistory, removeWaterTimeStamp, 'remove')

        },
        updateWaterUnit: (state, action) => {
            state.waterMainUnit = action.payload
            console.log(state.waterMainUnit, 'state.waterMainUnit')
            _updateWaterUnitStorage(state.waterMainUnit); // Update in local storage
        },
        updateHistoryInsight: (state, action) => {

            var historyInsightObj = action.payload;
            
            console.log("History Insight => ", historyInsightObj)

            state.waterloggedDates= Object.keys(historyInsightObj);
            state.waterloggedAmounts = Object.values(historyInsightObj);

            console.log("DATES => ",state.waterloggedDates, "Water logged =>", state.waterloggedAmounts )
          

        }

    } 
});


export async function getHistoryInsightArray() {

    var data = await fetchWaterLogHistory();
   

    const parsedData = JSON.parse(data);

    const sumByDate = {};
    if (parsedData) {
        Object.keys(parsedData).forEach(date => {
            const logs = parsedData[date];
            const sum = logs.reduce((total, log) => total + log.loggedWater, 0);
            sumByDate[date] = sum;
        });
    }

    return sumByDate;

    console.log("SUM BY DATE => ", sumByDate)


}

export function formatDateToMMDDYYYY(date) {

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    return `${formattedMonth}/${formattedDay}/${year}`;
}

const manageWaterLogHistory = (state, waterlog, loggedWater, action) => {
    const currentDate = new Date();

    let waterLogHistory = waterlog || {}
    let formattedCurrentDate = formatDateToMMDDYYYY(currentDate);
    let fetchCurrentDateHistory = waterLogHistory[formattedCurrentDate] || [];
    if (action == 'add') {
        let obj = {
            timeStamp: currentDate.toString(),
            loggedWater: loggedWater
        }
        fetchCurrentDateHistory.push(obj);
        waterLogHistory[formattedCurrentDate] = fetchCurrentDateHistory;
    } else {

        const updatedCurrentDateHistory = fetchCurrentDateHistory.filter((item) => item.timeStamp != loggedWater);
        waterLogHistory[formattedCurrentDate] = updatedCurrentDateHistory;
    }

    state.waterlogHistory = waterLogHistory;
    _updateWaterlogHistoryStorage(JSON.stringify(waterLogHistory));


}

const _updateWaterPercentage = (dailyWaterIntake, dailyWaterGoal) => {
    // dailyWaterIntake = _convertedWater(dailyWaterIntake,)
    // dailyWaterGoal = 
    return dailyWaterGoal == 0 ? 0 : ((dailyWaterIntake / dailyWaterGoal) * 100).toFixed(0);
}


export const { addWater, updateDailyGoal, updateWaterData, updateWaterUnit, removeWater, updateHistoryInsight } = dailyWaterGoalSlice.actions;
export default dailyWaterGoalSlice.reducer;
