import { View, Text, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { formatDateToMMDDYYYY } from '../../../../Redux/slice/water_amount_slice';
import { removeWater } from '../../../../Redux/slice/water_amount_slice';
import Colors,{darkTheme,lightTheme} from '../../../../colors'

export default function HistoryWaterLog() {

    const [colors, setColors] = useState(null);
    const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
    useEffect(() => {
        if (isDarkTheme == true) {
            setColors(darkTheme)
        }else{
            setColors(lightTheme)
        }
    }, [isDarkTheme]);
    const dispatch = useDispatch();
    const [isEdit, setEdit] = useState(false);
    const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);

    const handleEditBtn = () => {
        setEdit(!isEdit)
    }

    let waterlogHistory = useSelector((state) => state.dailyWaterGoal.waterlogHistory) || {};
    if (typeof waterlogHistory == 'string') {
        waterlogHistory = JSON.parse(waterlogHistory)
    }

    let currentDate = formatDateToMMDDYYYY(new Date());
    let currentDateHistory = (waterlogHistory[currentDate] || []).slice().reverse();



    const handleDeleteBtn = (item) => {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete the waterlogged history?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        dispatch(removeWater(item))
                    },
                    style: 'destructive',

                },
            ],
            { cancelable: false }
        );
    }

    function getHourAndMinuteFromDate(date) {
        const hour = date.getHours();
        const minute = date.getMinutes();
        const paddedMinute = minute.toString().padStart(2, '0');
        return `${hour}:${paddedMinute}`;
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={[styles.headerText,{color: colors?.primaryText,}]}>History</Text>
                <TouchableOpacity onPress={handleEditBtn}>
                    <Text style={[styles.editText,{color : colors?.primaryText}]}>Edit</Text>
                </TouchableOpacity>
            </View>
            {currentDateHistory &&
                <FlatList
                    horizontal
                    data={currentDateHistory}
                    renderItem={({ item }) => (

                        <View style={styles.containerA}>

                            {isEdit && (
                                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteBtn(item)}>
                                    <AntDesign name="minuscircle" size={14} color={colors?.white} />
                                </TouchableOpacity>
                            )
                            }
                                <View style={[styles.item_container,{backgroundColor: colors?.primaryColor}]}>
                                    <Text style={styles.item_style}>{item.loggedWater} {dailyWaterUnit}</Text>
                                    <Text style={{ textAlign: "center", marginTop: 3, backgroundColor:colors?.screen2Bg , color:colors?.white, paddingVertical:5, fontWeight:'bold' }}>{getHourAndMinuteFromDate(new Date(item.timeStamp))}</Text>
                            </View>
                        </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            }
            {Object.keys(currentDateHistory).length === 0 &&
                <View>
                    <Text style={{ marginTop: 4, fontSize: 18 }}>
                        You didn't logged water
                    </Text>
                </View>
            }
        </View>
    )
}