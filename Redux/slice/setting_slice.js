import { createSlice } from "@reduxjs/toolkit";
import { _updateNotificationPreference, _updateNotificationTime } from "../../database/localstorage";

const initialState = {
    notificationPreference : false,
    notificationTime : 1
}

const settingSlice = createSlice({
    name: 'SettingSlice',
    initialState,
    reducers: {
        setNotificationTime: (state, action) => {
            state.notificationTime = action.payload
            _updateNotificationTime(state.notificationTime)
            console.log("Slice Set NotificationTime => ", state.notificationTime )
        },
        setNotificationPreference : (state)=>{
            state.notificationPreference = !state.notificationPreference
            _updateNotificationPreference( state.notificationPreference);
            }
    }
});

export const {setNotificationTime, setNotificationPreference } = settingSlice.actions;
export default settingSlice.reducer;
