import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';
import Colors, {lightTheme, darkTheme} from '../../colors'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';

export default function SettingScreen() {
  const [colors, setColors] = useState(null);
  const isDarkTheme = useSelector((state) => state.setting.darkTheme); 
  useEffect(() => {
      if (isDarkTheme == true) {
          setColors(darkTheme)
      }else{
          setColors(lightTheme)
      }
  }, [isDarkTheme]);
  const navigation = useNavigation();
  const user = useSelector((state) => state.setting.user);

  const handleUpdateProfileClick = () => {
    navigation.navigate('UpdateProfile');
  }

  const handleNotificationClick = () => {
    navigation.navigate('NotificationScreen');
  }

  return (
    <View style={[styles.container,{backgroundColor:colors?.secondaryColor}]}>
        <View style={styles.nameView}>
          <Text style={[styles.nameStyle,{color:colors?.thirdText}]}> { user?.name || 'Update Profile' }</Text>
          <Text style={[styles.genderTextStyle,{color:colors?.thirdText}]}> {user?.gender}</Text>
        </View>
      <TouchableOpacity onPress={handleUpdateProfileClick}>
        <View style={[styles.option,{backgroundColor: colors?.secondaryColor, shadowColor: colors?.darkColor}]}>
          <Text style={[styles.optionTextStyle,{color: colors?.thirdText}]}>Update Profile</Text>
          <Entypo name="chevron-right" size={24} color={colors?.thirdText} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNotificationClick}>
        <View style={[styles.option,{backgroundColor: colors?.secondaryColor, shadowColor: colors?.darkColor}]}>
          <Text style={[styles.optionTextStyle,{color: colors?.thirdText}]}>Notification Preference</Text>
          <Entypo name="chevron-right" size={24} color={colors?.thirdText} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{ navigation.navigate('HydrationTips'); }}>
        <View style={[styles.option,{backgroundColor: colors?.secondaryColor, shadowColor: colors?.darkColor}]}>
          <Text style={[styles.optionTextStyle, {color: colors?.thirdText}]}>Hydration Tips</Text>
          <Entypo name="chevron-right" size={24} color={colors?.thirdText} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('AppTheme');}}>
        <View style={[styles.option,{backgroundColor: colors?.secondaryColor, shadowColor: colors?.darkColor}]}>
          <Text style={[styles.optionTextStyle, {color: colors?.thirdText}]}>App theme</Text>
          <Entypo name="chevron-right" size={24} color={colors?.thirdText} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleUpdateProfileClick}>
        <View style={[styles.option,{backgroundColor: colors?.secondaryColor, shadowColor: colors?.darkColor}]}>
          <Text style={[styles.optionTextStyle, {color: colors?.thirdText}]}>Share H2OHelper</Text>
          <Entypo name="chevron-right" size={24} color={colors?.thirdText} />
        </View>
      </TouchableOpacity>
      <Text style={styles.versionStyle}>v1.0.1 </Text>
    </View>
  )
}