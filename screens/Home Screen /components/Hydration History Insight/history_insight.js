import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'

import { useSelector } from 'react-redux';


import {
    LineChart,
    // BarChart,
    // PieChart,
    // ProgressChart,
    // ContributionGraph,
    // StackedBarChart
  } from "react-native-chart-kit";
import Colors from '../../../../colors';

export default function HistoryInsight() {
    
    var waterAmounts = useSelector((state) => state.dailyWaterGoal.waterloggedAmounts);
    var dates = useSelector((state) => state.dailyWaterGoal.waterloggedDates);

    // waterAmounts =  [800, 200 , 400]
    // dates = [ "11/27/2023", "11/26/2023","12/13/2023"]
    
    const data = {
        labels: dates,
        datasets: [
            {
                data: waterAmounts,
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        // legend: ["Rainy Days"] // optional
    };  
    
    useEffect(()=>{

    },[])

    const chartConfig = {
        backgroundGradientFrom: 'white',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: 'white',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 0.5) => `rgba(40, 49, 140, 1)`, //`rgba(17, 191, 241, ${opacity})`, //rgba(40, 49, 140, 1)

        strokeWidth: 2, // optional, default 3
        barPercentage: 1.0,
        useShadowColorFromDataset: false // optional
      };
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Hydration History Insight</Text>
            {dates.length ? 
            <LineChart
                data={data}
                width={380}
                height={220}
                chartConfig={chartConfig}
                // withInnerLines={false}
                bezier
            />: 
            <Text style={{ marginTop: 4, fontSize: 18 }}>
                You didn't logged water
            </Text>}
            
        </View>
    )
}

   