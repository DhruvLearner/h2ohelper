import { View, Text, Button } from 'react-native'
import { styles } from './style'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import HomeScreen from '../../home_screen'; 




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



export default function WaterScreen() {


  const dailyWaterIntake = useSelector((state) => state.dailyWaterGoal.dailyWaterIntake);
  const dailyWaterPer = useSelector((state) => state.dailyWaterGoal.drunkWaterPer);
  const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal) == " " ? 0 : useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
  const dailyWaterUnit = useSelector((state) => state.dailyWaterGoal.waterUnit);
  const motivationalSentence = getMotivationalSentence(dailyWaterPer);


  const confettiRef = useRef();
  function triggerConfetti() {
    confettiRef.current?.play(0)
  }

  return (
    <View style={styles.container}>
      {dailyWaterPer >= 100 ? triggerConfetti() : null}
      <LottieView
        ref={confettiRef}
        source={require('/Users/smitkhokhariya/Fanshawe/SEM3/Capstone/h2ohelper/assets/confetti.json')}
        autoPlay={false}
        loop={false}
        style={styles.lottie}
        resizeMode='cover'
      />
      <Text style={styles.screenHeader}>{motivationalSentence}</Text>
      <View style={styles.visualContainer}>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={dailyWaterPer}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
          lineCap='round'
        >
          {(fill) => (
            <Text style={styles.progressText}>
              {dailyWaterPer}%
            </Text>
          )}
        </AnimatedCircularProgress>
        <View style={styles}>
          <Text style={styles.waterProgressText}>
            {dailyWaterIntake}
            {dailyWaterUnit} of {dailyWaterGoal}
            {dailyWaterUnit}
          </Text>
        </View>
      </View>
    </View>
  );
}

// Rest of your style and code
