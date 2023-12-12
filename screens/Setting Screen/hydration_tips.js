import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native";
import Colors from '../../colors'

export default function HydrationTips() {
  const data = [
    { id: '1', title: 'Drink Water First Thing in the Morning', tips: 'Start your day by drinking a glass of water. It helps kickstart your metabolism and rehydrate your body after a night\'s sleep.' },
    { id: '2', title: 'Carry a Reusable Water Bottle', tips: 'Keep a water bottle with you throughout the day. Having water readily available makes it easier to stay hydrated.' },
    { id: '3', title: 'Set Reminders', tips: 'Use your phone or a smartwatch to set reminders to drink water at regular intervals, especially if you tend to forget.' },
    { id: '4', title: 'Flavor Water Naturally', tips: 'Add natural flavors to your water with slices of lemon, cucumber, or mint. This can make drinking water more enjoyable.' },
    { id: '5', title: 'Hydrate Before Meals', tips: 'Drink a glass of water before meals. It not only helps with hydration but can also contribute to better digestion.' },
    { id: '6', title: 'Monitor Urine Color', tips: 'Pay attention to the color of your urine. Light yellow or pale straw usually indicates proper hydration.' },
    { id: '7', title: 'Drink Water with Snacks', tips: 'Whenever you have a snack, pair it with a glass of water. This helps control portion sizes and keeps you hydrated.' },
    { id: '8', title: 'Hydrate During Exercise', tips: 'Drink water before, during, and after exercise to replace fluids lost through sweat. Adjust your intake based on the intensity and duration of your workout.' },
    { id: '9', title: 'Choose Water Over Sugary Drinks', tips: 'Opt for water instead of sugary beverages. Water is a healthier choice and doesn\'t add unnecessary calories.' },
    { id: '10', title: 'Create a Hydration Schedule', tips: 'Plan specific times during the day to drink water. For example, have a glass of water when you wake up, before lunch, and before bedtime.' },
    { id: '11', title: 'Eat Water-Rich Foods', tips: 'Consume foods with high water content, such as fruits (watermelon, strawberries) and vegetables (cucumbers, celery).' },
    { id: '12', title: 'Keep Hydrated in Hot Weather', tips: 'In hot weather, increase your water intake to compensate for additional fluid loss through sweating.' },
    { id: '13', title: 'Limit Caffeine and Alcohol', tips: 'Caffeine and alcohol can contribute to dehydration. Balance your intake with an extra glass of water for each caffeinated or alcoholic beverage.' },
    { id: '14', title: 'Hydrate When Sick', tips: 'When you\'re sick, your body may lose more fluids. Make a conscious effort to drink water and stay hydrated during illness.' },
    { id: '15', title: 'Practice Mindful Hydration', tips: 'Pay attention to your body\'s signals. Thirst is a clear indicator that it\'s time to drink water. Listen to your body\'s cues for optimal hydration.' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.tips}>{item.tips}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom:80,
    backgroundColor:Colors.secondaryColor
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    borderWidth: 0.1,
    shadowColor: Colors.darkColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tips: {
    fontSize: 14,
    color: Colors.thirdText,
  },
  title:{
    fontSize:16, 
    fontWeight:'700',
    color:Colors.thirdText,
    paddingBottom:5,
  }

});