import { configureStore } from "@reduxjs/toolkit";
import dailyWaterGoalReducer from "./slice/water_amount_slice";

export const store = configureStore({
    reducer: {
        dailyWaterGoal: dailyWaterGoalReducer
    }
});

