import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';
import Colors from '../../colors'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';


export default function SettingScreen() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.setting.user);

  const handleUpdateProfileClick = () => {
    navigation.navigate('UpdateProfile');
  }

  const handleNotificationClick = () => {
    navigation.navigate('NotificationScreen');
  }

  const options = {
    title: 'H2O Helper',
    message: 'A water reminder application',
    url: 'https://google.com'
  }

  const onShare = async () => {
    try {
      const result = await Share.share(options);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Text style={styles.nameStyle}> {user?.name || 'Update Profile'}</Text>
        <Text style={styles.genderTextStyle}> {user?.gender}</Text>
      </View>
      <TouchableOpacity onPress={handleUpdateProfileClick}>
        <View style={styles.option}>
          <Text style={styles.optionTextStyle}>Update Profile</Text>
          <Entypo name="chevron-right" size={24} color={Colors.primaryColor} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNotificationClick}>
        <View style={styles.option}>
          <Text style={styles.optionTextStyle}>Notification Preference</Text>
          <Entypo name="chevron-right" size={24} color={Colors.primaryColor} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('HydrationTips'); }}>
        <View style={styles.option}>
          <Text style={styles.optionTextStyle}>Hydration Tips</Text>
          <Entypo name="chevron-right" size={24} color={Colors.primaryColor} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleUpdateProfileClick}>
        <View style={styles.option}>
          <Text style={styles.optionTextStyle}>App theme</Text>
          <Entypo name="chevron-right" size={24} color={Colors.primaryColor} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleUpdateProfileClick}>
        <View style={styles.option}>
          <Text style={styles.optionTextStyle}>About us</Text>
          <Entypo name="chevron-right" size={24} color={Colors.primaryColor} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => {
         await onShare();
      }}>
        <View style={styles.option}>
          <Text style={styles.optionTextStyle}>Share H2OHelper</Text>
          <Entypo name="chevron-right" size={24} color={Colors.primaryColor} />
        </View>
      </TouchableOpacity>
      <Text style={styles.versionStyle}>v1.0.1 </Text>
    </View>
  )
}