import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import LocalNotification from '../../components/notification'

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      
      <LocalNotification></LocalNotification>
    </View>
  )
}