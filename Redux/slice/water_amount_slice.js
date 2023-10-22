import { createSlice } from "@reduxjs/toolkit";

const tempDailyGoal = 3500;
const tempDailyWaterIntake = 100;
const tempWaterUnit = "ml";

const initialState = {
    dailyWaterGoal: tempDailyGoal,
    waterUnit : tempWaterUnit,
    dailyWaterIntake:tempDailyWaterIntake,
    drunkWaterPer : ((tempDailyWaterIntake/tempDailyGoal)*100).toFixed(2),
}

const dailyWaterGoalSlice = createSlice({
    name: 'H2Ohelper',
    initialState,
    reducers: {
        updateDailyGoal:(state,action)=>{
            // Update Daily Goal
            state.dailyWaterGoal = action.payload;
            state.drunkWaterPer=_updateWaterPercentage(state.dailyWaterIntake,state.dailyWaterGoal)
        },
        addWater:(state,action)=>{
            
            // Update water intake
            state.dailyWaterIntake += action.payload;

            //Update percentage of daily water
            state.drunkWaterPer=_updateWaterPercentage(state.dailyWaterIntake,state.dailyWaterGoal)
        }
        
    }
});

const _updateWaterPercentage=(dailyWaterIntake,dailyWaterGoal)=>{
    return ((dailyWaterIntake/dailyWaterGoal)*100).toFixed(2);
}

export const { addWater, updateDailyGoal } = dailyWaterGoalSlice.actions;
export default dailyWaterGoalSlice.reducer;
