import { View, Text, FlatList } from 'react-native'
import React, {  useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { formatDateToMMDDYYYY } from '../../../../Redux/slice/water_amount_slice';
import { removeWater } from '../../../../Redux/slice/water_amount_slice';


export default function HistoryWaterLog() {

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
    
    

    function getHourAndMinuteFromDate(date) {
        const hour = date.getHours();
        const minute = date.getMinutes();
        return `${hour}:${minute}`;
      }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>History</Text>
                <TouchableOpacity onPress={handleEditBtn}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={currentDateHistory}
                renderItem={({ item }) => (
                    <View style={styles.containerA}>
                       
                            {isEdit && (
                                <TouchableOpacity style={styles.deleteButton} onPress={()=>dispatch(removeWater(item))}>
                                    <AntDesign name="minuscircle" size={14} color="white" />
                                </TouchableOpacity>
                            )
                            }
                            <View style={styles.item_container}>
                                <Text style={styles.item_style}>{item.loggedWater} {dailyWaterUnit}</Text>
                            </View>
                        
                        <Text style={{ textAlign: "center", marginTop: 3 }}>{getHourAndMinuteFromDate(new Date(item.timeStamp))}</Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}