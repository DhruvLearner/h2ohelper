import { View, Text, Switch, Platform, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './styles'
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import Colors, {lightTheme, darkTheme} from '../colors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setNotificationPreference, setNotificationTime } from '../Redux/slice/setting_slice';


export default function LocalNotification() {
    const notificationPreference = useSelector((state)=>state.setting.notificationPreference); 

    const [schedule, setSchedule] = useState([])
    const [error, setError] = useState('');
    const [number, setNumber] = useState('');

    const [colors, setColors] = useState(null);
    const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
    useEffect(() => {
        if (isDarkTheme == true) {
            setColors(darkTheme)
        }else{
            setColors(lightTheme)
        }
    }, [isDarkTheme]);

    const defaultNotificationTime = useSelector((state)=>state.setting.notificationTime)
   
    const dispatch = useDispatch();

    const handleNumberChange = (text) => {
        setNumber(text)
    }
    useEffect(()=>{
        setNumber(defaultNotificationTime.toString())
        
    },[defaultNotificationTime])

    const handleSaveBtn = async ()=>{
        if (number === '') {
            setError('   Please enter a value'); 
          } else if (!/^\d+$/.test(number)) {
            setError('Please enter a valid integer value'); 
          } else {
            setError();
            cancelReminder();

            dispatch(setNotificationTime(number));

            const cancelled = await cancelReminder();
            if (cancelled) {
                dispatch(setNotificationPreference())
                setSchedule(await getSchedule());
            }
        
            const scheduled = await scheduleReminder(number);
            if (scheduled) {
                dispatch(setNotificationPreference())
                setSchedule(await getSchedule());
            }

          }
    }

    const changeNotificationPreference = async () => {
        if (notificationPreference) {
            const cancelled = await cancelReminder();
            if (cancelled) {
                dispatch(setNotificationPreference())
                setSchedule(await getSchedule());
            }

        } else {
            const scheduled = await scheduleReminder(defaultNotificationTime);
            if (scheduled) {
                dispatch(setNotificationPreference())
                setSchedule(await getSchedule());
            }
        }


    }


    useEffect(() => {
        (async () => {
            const previouslyScheduled = await getSchedule();
            setSchedule(previouslyScheduled)
            
            if (previouslyScheduled.find((item) => item.type === 'reminder')) {
                dispatch(setNotificationPreference())
               
            }

        })();

    }, []);

    return (
        <View style={[style.maincontainer,{backgroundColor: colors?.secondaryColor}]}>
            <Text style={style.headingStyle}>Drink Water Notification : </Text>
            <View style={[style.container,{color: colors?.thirdText}]}>
                <Switch value={notificationPreference} onChange={changeNotificationPreference}
                    trackColor={{ false: '#daecec', true: Colors.primaryColor }}
                    ios_backgroundColor="#daecec" />
                <Text style={{ color: colors?.thirdText }}> Set Daily Reminder </Text>
            </View>
            {notificationPreference &&
            <View style={style.customNotificationView}>
                <Text style={{ color: colors?.thirdText }}>In an every </Text>
                <View style={style.textInputView}>
                    <TextInput
                        style={[
                            style.input, { color: colors?.thirdText},
                            error && { borderColor: 'red' }
                        ]}
                        onChangeText={handleNumberChange}
                        value={number}
                        keyboardType='number-pad'
                        placeholder="Enter Minutes"
                    />
                    {error && <Text style={style.errorText}>{error}</Text>}
                </View>
                <Text style={{ color: Colors.thirdText }}>minutes </Text>
                <TouchableOpacity
                style={style.saveBtn}
                    onPress={() => handleSaveBtn()}
                >
                    <Text style={style.saveText}>Save</Text>
                </TouchableOpacity>
               
            </View>
            }
        </View>
    );
}

async function scheduleReminder(notificationTime) {
    
    try {
        const permission = await Notifications.getPermissionsAsync();

        if (!permission.granted) {
            const request = await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowSound: true,
                    allowBadge: true
                }
            });
            
            if (!request.granted) {
                return false;
            }

        }

        const id = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'H2O Helper',
                body: 'Drink water Reminder!!',
                sound: false,
                priority: Notifications.AndroidNotificationPriority.HIGH,
                data: {
                    userId: 1154676,
                    userName: 'Smitkumar',
                    type: 'reminder'
                },
                imageUrl: './assets/waterdrop.png'

            },
            trigger: {
                
                seconds:  (parseInt(notificationTime) * 60),
                repeats: true,

            }
        })
        
        if (!id) {
            return false;
        }
        return true;


    }
    catch (error) {

        return false;
    }

}

async function cancelReminder() {
    
    let cancelled = false;
    const schedule = await getSchedule();

    for (const item of schedule) {
        if (item.type === 'reminder') {
            await Notifications.cancelScheduledNotificationAsync(item.id);
            cancelled = true
        }
    }
 
    return cancelled;

}

async function getSchedule() {

    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
    const schedule = [];
    scheduledNotifications.forEach((scheduleNotification) => {
        schedule.push({
            id: scheduleNotification.identifier,
            type: scheduleNotification.content.data.type
        })
    }); 
   
    return schedule;
}
