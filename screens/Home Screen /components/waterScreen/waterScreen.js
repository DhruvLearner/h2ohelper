import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FontAwesome } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';

export default function WaterScreen() {
  const dailyWaterIntake = useSelector((state) => state.dailyWaterGoal.dailyWaterIntake);
  const dailyWaterPer = useSelector((state) => state.dailyWaterGoal.drunkWaterPer);
  const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
  const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);

  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>Today, you can make it to reaching your goal!</Text>
      <View style={styles.visualContainer}>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={dailyWaterPer}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
          lineCap= 'round'
          >{
            (fill) => (
              <Text style={styles.progressText}>
                {dailyWaterPer}%      
              </Text>
            )
          }</AnimatedCircularProgress>
          <View style={styles}>
            <Text style={styles.waterProgressText}>{dailyWaterIntake}{dailyWaterUnit} of {dailyWaterGoal}{dailyWaterUnit}</Text>
            {/* <FontAwesome.Button name="edit" size={24} color="black" onPress={
              console.log("edit pressed")
            } /> */}
          </View>

      </View>
    </View>
  )
}