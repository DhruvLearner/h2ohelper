import { createSlice } from "@reduxjs/toolkit";
import { _updateNotificationPreference, _updateNotificationTime } from "../../database/localstorage";

const initialState = {
    notificationPreference : false,
    notificationTime : 60
}

const settingSlice = createSlice({
    name: 'SettingSlice',
    initialState,
    reducers: {
        setNotificationTime: (state, action) => {
            state.notificationTime = action.payload
            _updateNotificationTime(state.notificationTime)
        },
        setNotificationPreference : (state)=>{
            state.notificationPreference = !state.notificationPreference
            _updateNotificationPreference( state.notificationPreference);
            }
    }
});

export const {setNotificationTime, setNotificationPreference } = settingSlice.actions;
export default settingSlice.reducer;
