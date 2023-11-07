import { View, Text, Switch, Platform, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './styles'
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import Colors from '../colors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setNotificationPreference, setNotificationTime } from '../Redux/slice/setting_slice';


export default function LocalNotification() {
    const notificationPreference = useSelector((state)=>state.setting.notificationPreference); 

    const [schedule, setSchedule] = useState([])
    const [error, setError] = useState('');
    const [number, setNumber] = useState('');


    const defaultNotificationTime = useSelector((state)=>state.setting.notificationTime)
   
    const dispatch = useDispatch();

    const handleNumberChange = (text) => {
        console.log(text)
        setNumber(text)
    }
    useEffect(()=>{
        setNumber(defaultNotificationTime.toString())
        console.log("Stored Notification Time ==> ",defaultNotificationTime )
    },[defaultNotificationTime])

    const handleSaveBtn = ()=>{
        if (number === '') {
            setError('   Please enter a value'); 
          } else if (!/^\d+$/.test(number)) {
            setError('Please enter a valid integer value'); 
          } else {
            setError();
            dispatch(setNotificationTime(number));
          }
    }

    const changeNotificationPreference = async () => {
        if (notificationPreference) {
            console.log("not scheduled")
            const cancelled = await cancelReminder();
            if (cancelled) {
                dispatch(setNotificationPreference())
                setSchedule(await getSchedule());
            }

        } else {
            console.log("scheduled")
            const scheduled = await scheduleReminder(defaultNotificationTime);
            if (scheduled) {
                dispatch(setNotificationPreference())
                setSchedule(await getSchedule());
            }
        }


    }


    //   console.log("Notification : ", Notifications);

    useEffect(() => {
        (async () => {
            const previouslyScheduled = await getSchedule();
            console.log('Previously Schedule : ', previouslyScheduled)
            setSchedule(previouslyScheduled)

            if (previouslyScheduled.find((item) => item.type === 'reminder')) {
                // setReminder(true);
            }

        })();

    }, []);

    return (
        <View style={style.maincontainer}>
            <Text style={style.headingStyle}>Notification : </Text>
            <View style={style.container}>
                <Switch value={notificationPreference} onChange={changeNotificationPreference}
                    trackColor={{ false: '#daecec', true: Colors.primaryColor }}
                    ios_backgroundColor="#daecec" />
                <Text> Set Daily Reminder </Text>
            </View>
            {notificationPreference &&
            <View style={style.customNotificationView}>
                <View style={style.textInputView}>
                    <TextInput
                        style={[
                            style.input,
                            error && { borderColor: 'red' }
                        ]}
                        onChangeText={handleNumberChange}
                        value={number}
                        keyboardType='number-pad'
                        placeholder="Enter Minutes"
                    />
                    {error && <Text style={style.errorText}>{error}</Text>}
                </View>
              
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
    console.log('Schedule for ', Platform.OS)
    try {
        const permission = await Notifications.getPermissionsAsync();
        console.log('Permission : ', permission)

        if (!permission.granted) {
            const request = await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowSound: true,
                    allowBadge: true
                }
            });
            console.log("Request : ", request)
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
        console.log("Notification id error , ", error)
        return false;
    }

}

async function cancelReminder() {
    console.log('Cancel for ', Platform.OS)
    let cancelled = false;
    const schedule = await getSchedule();

    for (const item of schedule) {
        if (item.type === 'reminder') {
            await Notifications.cancelScheduledNotificationAsync(item.id);
            console.log('Cancelled : ', item.id)
            cancelled = true
        }
    }

    return cancelled;

}

async function getSchedule() {

    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
    console.log('Schedule: ', scheduledNotifications)

    const schedule = [];
    scheduledNotifications.forEach((scheduleNotification) => {
        schedule.push({
            id: scheduleNotification.identifier,
            type: scheduleNotification.content.data.type
        })
    }); 
    return schedule;
}
