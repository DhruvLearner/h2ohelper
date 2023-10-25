import { createSlice } from "@reduxjs/toolkit";
import { _updateDailyGoalStorage, _updateDailyWaterIntakeStorage, _updateWaterUnitStorage  } from "../../database/localstorage";

var tempDailyGoal = 0;
var tempDailyWaterIntake = 0;
var tempWaterUnit = "ml";

const initialState = {
    dailyWaterGoal: tempDailyGoal,
    waterUnit : tempWaterUnit,
    dailyWaterIntake:tempDailyWaterIntake,
    drunkWaterPer : tempDailyGoal == 0 ? 0 : ((tempDailyWaterIntake/tempDailyGoal)*100).toFixed(2),
}

const dailyWaterGoalSlice = createSlice({
    name: 'H2Ohelper',
    initialState,
    reducers: {
        updateWaterData:(state,action)=>{
            state.dailyWaterGoal = action.payload.tempDailyGoal;
            state.waterUnit = action.payload.tempWaterUnit;
            state.dailyWaterIntake = action.payload.tempDailyWaterIntake;
            state.drunkWaterPer = _updateWaterPercentage(state.dailyWaterIntake,state.dailyWaterGoal)
        },
        updateDailyGoal:(state,action)=>{
            // Update Daily Goal
            state.dailyWaterGoal = parseFloat(action.payload);
            state.drunkWaterPer=_updateWaterPercentage(state.dailyWaterIntake,state.dailyWaterGoal)
            _updateDailyGoalStorage(state.dailyWaterGoal);
        },

        addWater:(state,action)=>{
            
            // Update water intake
            state.dailyWaterIntake = parseFloat(state.dailyWaterIntake) + parseFloat(action.payload);
            console.log(action.payload,"Payload")
            //Update percentage of daily water
            state.drunkWaterPer=_updateWaterPercentage(state.dailyWaterIntake,state.dailyWaterGoal);

            _updateDailyWaterIntakeStorage(state.dailyWaterIntake);
        },

        updateWaterUnit: (state, action) => {
            state.waterUnit = action.payload;
            _updateWaterUnitStorage(state.waterUnit); // Update in local storage
          },
        
        
    }
});



const _updateWaterPercentage=(dailyWaterIntake,dailyWaterGoal)=>{
    return dailyWaterGoal == 0 ? 0 : ((dailyWaterIntake/dailyWaterGoal)*100).toFixed(0);
}

export const { addWater, updateDailyGoal, updateWaterData, updateWaterUnit } = dailyWaterGoalSlice.actions;
export default dailyWaterGoalSlice.reducer;
