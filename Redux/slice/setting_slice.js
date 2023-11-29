import { createSlice } from "@reduxjs/toolkit";
import { _updateNotificationPreference, _updateNotificationTime, _updateUserInfo } from "../../database/localstorage";

const initialState = {
    notificationPreference : false,
    notificationTime : 1,
    user: {
        name : '',
        gender : 'Male',
        weight: '',
        height:'',
    }
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
        },
        updateUserInfo:(state, action)=>{
            state.user = action.payload
            _updateUserInfo(state.user);
        }

    }
});

export const {setNotificationTime, setNotificationPreference, updateUserInfo } = settingSlice.actions;
export default settingSlice.reducer;
