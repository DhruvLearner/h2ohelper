import { View, Text, Switch, Platform } from 'react-native'
import React from 'react'
import style from './styles'
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import Colors from '../colors';



export default function LocalNotification() {

    const [allowNotification, setAllowNotification] = useState(false)

    const [schedule, setSchedule] = useState([])

    const changeNotificationPreference = async () => {
        if (allowNotification) {
            console.log("not scheduled")
            const cancelled = await cancelReminder();
            if (cancelled) {
                setAllowNotification(false)
                setSchedule(await getSchedule());
            }

        } else {
            console.log("scheduled")
            const scheduled = await scheduleReminder();
            if (scheduled) {
                setAllowNotification(true)
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
                <Switch value={allowNotification} onChange={changeNotificationPreference}
                    trackColor={{ false: '#daecec', true: Colors.primaryColor }}
                    ios_backgroundColor="#daecec" />
                <Text> Set Daily Reminder </Text>
            </View>
            <View>
                <Text>
                    Scheduled Notification : {schedule.length}
                </Text>
                {
                    schedule.map((item, index) => (
                        <Text key={index} >
                            {item.type} : {item.id}
                        </Text>
                    ))
                }
            </View>
        </View>
    );
}

async function scheduleReminder() {
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
                imageUrl: require('../assets/waterdrop.png')

            },
            trigger: {
                seconds: 60,
                repeats: true,

            }
        })

        console.log('Schedule Id: ', id)
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
