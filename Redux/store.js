import { configureStore } from "@reduxjs/toolkit";
import dailyWaterGoalReducer from "./slice/water_amount_slice";
import settingReducer from './slice/setting_slice';

export const store = configureStore({
    reducer: {
        dailyWaterGoal: dailyWaterGoalReducer,
        setting : settingReducer
    }
});

