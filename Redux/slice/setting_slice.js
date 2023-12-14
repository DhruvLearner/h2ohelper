import { createSlice } from "@reduxjs/toolkit";
import { _updateNotificationPreference, _updateNotificationTime, _updateUserInfo, _updateDarkThemeSetting } from "../../database/localstorage";

const initialState = {
    notificationPreference : false,
    notificationTime : 1,
    darkTheme: false,
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
        },
        updateDarkThemeSetting:(state,action)=>{
            state.darkTheme = action.payload
            _updateDarkThemeSetting(state.darkTheme);
        }

    }
});

export const {setNotificationTime, setNotificationPreference, updateUserInfo, updateDarkThemeSetting } = settingSlice.actions;
export default settingSlice.reducer;
