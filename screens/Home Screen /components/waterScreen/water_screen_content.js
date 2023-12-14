import React, { useRef, useState ,useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import Colors,{ darkTheme, lightTheme } from '../../../../colors';

const getMotivationalSentence = (percentage) => {
    if (percentage === 0) {
      return "Today, you can make it to reaching your goal!";
    } else if (percentage <= 25) {
      return "You're a quarter of the way there! Keep going!";
    } else if (percentage <= 50) {
      return "You're halfway to success! Keep up the good work!";
    } else if (percentage <= 75) {
      return "Only 25% left to reach your goal. You've got this!";
    } else if (percentage >= 100) {
      return "Congratulations! You've hit your daily water intake goal!";
    } else {
      return "Stay hydrated and thrive!";
    }
  };
  
export default function WaterScreenContent() {
  const [colors, setColors] = useState(null);
  const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
    useEffect(() => {
        if (isDarkTheme == true) {
            setColors(darkTheme)
        }else{
            setColors(lightTheme)
        }
    }, [isDarkTheme]);
    const confettiRef = useRef();
    const dailyWaterIntake = useSelector((state) => state.dailyWaterGoal.dailyWaterIntake);
    const dailyWaterPer = useSelector((state) => state.dailyWaterGoal.drunkWaterPer);
    const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
    const motivationalSentence = getMotivationalSentence(dailyWaterPer);
    const dailyWaterMainUnit = useSelector((state) => state.dailyWaterGoal.waterMainUnit);
  
    const tabBgColor = isDarkTheme == 1 ? colors?.tipsBg : "#3d5875";
    const tintBgColor = colors?.tintBgColor

    
    function triggerConfetti() {
      confettiRef.current?.play(0)
    }
  
    return (
      <View style={[styles.container,{backgroundColor: isDarkTheme == false ? colors?.primaryColor : colors?.darkGray}]}>
        {dailyWaterPer >= 100 ? triggerConfetti() : null}
        <LottieView
          ref={confettiRef}
          source={require('../../../../assets/confetti.json')}
          autoPlay={false}
          loop={false}
          style={styles.lottie}
          resizeMode='cover'
        />
        <Text style={[styles.screenHeader,{color: colors?.whiteNblack}]}>{motivationalSentence}</Text>
        <View style={styles.visualContainer}>
          <AnimatedCircularProgress
            size={120}
            width={15}
            fill={Number(dailyWaterPer)}
            tintColor={tintBgColor}
            backgroundColor={tabBgColor}
            lineCap='round'
          >
            {(fill) => (
              <Text style={[styles.progressText,{color: colors?.whiteNblack}]}>
                {dailyWaterPer?.toString()}% 
              </Text>
            )}
          </AnimatedCircularProgress> 
          <View style={styles}>
            <Text style={[styles.waterProgressText,{color: colors?.whiteNblack,}]}>
              {_convertedWater(dailyWaterIntake,dailyWaterMainUnit)}{" "}
              {dailyWaterMainUnit} of {_convertedWater(dailyWaterGoal,dailyWaterMainUnit)}{" "} 
              {dailyWaterMainUnit}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  
  export const _convertedWater = (amount , unit = 'ml') => {
    if (unit == 'liter') {
      return parseFloat((parseInt(amount) / 1000).toFixed(3));
    }else{
      return amount
    }
  }