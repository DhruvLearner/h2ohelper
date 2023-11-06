import { createSlice } from "@reduxjs/toolkit";
import { _updateDailyGoalStorage, _updateDailyWaterIntakeStorage, _updateWaterUnitStorage, _updateWaterlogHistoryStorage } from "../../database/localstorage";

var tempDailyGoal = 0;
var tempDailyWaterIntake = 0;
var tempWaterUnit = "ml";


const initialState = {
    dailyWaterGoal: tempDailyGoal,
    waterUnit: tempWaterUnit,
    dailyWaterIntake: tempDailyWaterIntake,
    drunkWaterPer: tempDailyGoal == 0 ? 0 : ((tempDailyWaterIntake / tempDailyGoal) * 100).toFixed(2),
    waterlogHistory: {}
}


let today = [];

const dailyWaterGoalSlice = createSlice({
    name: 'H2Ohelper',
    initialState,
    reducers: {
        updateWaterData: (state, action) => {
            state.dailyWaterGoal = action.payload.tempDailyGoal;
            state.waterUnit = action.payload.tempWaterUnit;
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
            manageWaterLogHistory(state, state.waterlogHistory,loggedWater,'add' )
        },
        removeWater:(state,action)=>{
            let loggedWater = action.payload.loggedWater;
            let removeWaterTimeStamp = action.payload.timeStamp;
            // Update water intake
            state.dailyWaterIntake = parseFloat(state.dailyWaterIntake) - parseFloat(loggedWater);
            //Update percentage of daily water
            state.drunkWaterPer = _updateWaterPercentage(state.dailyWaterIntake, state.dailyWaterGoal);
            _updateDailyWaterIntakeStorage(state.dailyWaterIntake);

            // Add Water History
            manageWaterLogHistory(state, state.waterlogHistory,removeWaterTimeStamp,'remove' )

        },
        updateWaterUnit: (state, action) => {
            state.waterUnit = action.payload;
            _updateWaterUnitStorage(state.waterUnit); // Update in local storage
        },
    }
});

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
    console.log(typeof waterlog, "TYPE OF WATERLOG")
    let waterLogHistory =   waterlog || {}
    let formattedCurrentDate = formatDateToMMDDYYYY(currentDate);
    let fetchCurrentDateHistory = waterLogHistory[formattedCurrentDate] || [];
    if (action == 'add') {
        let obj = {
            timeStamp: currentDate.toString(),
            loggedWater: loggedWater
        }
        fetchCurrentDateHistory.push(obj);
        waterLogHistory[formattedCurrentDate] = fetchCurrentDateHistory;
    }else{
        console.log(loggedWater, "AS A TIMESTAMP");
        const updatedCurrentDateHistory = fetchCurrentDateHistory.filter((item) => item.timeStamp != loggedWater);
        waterLogHistory[formattedCurrentDate] = updatedCurrentDateHistory;
    }
    
    state.waterlogHistory = waterLogHistory;
    _updateWaterlogHistoryStorage(JSON.stringify(waterLogHistory));


}

const _updateWaterPercentage = (dailyWaterIntake, dailyWaterGoal) => {
    return dailyWaterGoal == 0 ? 0 : ((dailyWaterIntake / dailyWaterGoal) * 100).toFixed(0);
}


export const { addWater, updateDailyGoal, updateWaterData, updateWaterUnit, removeWater } = dailyWaterGoalSlice.actions;
export default dailyWaterGoalSlice.reducer;
