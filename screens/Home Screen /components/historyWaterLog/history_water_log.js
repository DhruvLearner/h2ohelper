import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';



export default function HistoryWaterLog() {

    const DATA = ['100 ml', '200 ml', '300 ml', '400 ml', '500 ml', '600 ml', '700 ml', '800 ml',
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>History</Text>
                <TouchableOpacity onPress={() => updateBottomSheetState('open')}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.mainContainer}>
                        <TouchableOpacity style={styles.deleteButton}>
                            <AntDesign name="minuscircle" size={14} color="white" />
                        </TouchableOpacity>
                        <View style={styles.item_container}>
                            <Text style={styles.item_style}>{item}</Text>

                        </View>
                    </View>
                )}
            />

        </View>
    )
}