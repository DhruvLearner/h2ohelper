import React, { useRef } from "react";
import {
  Animated,
  TouchableOpacity,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles';
import { Image } from 'react-native';
import HomeScreen from '../Home Screen /home_screen';
import RBSheet from "react-native-raw-bottom-sheet";
import WaterLogSheetContainer from "./waterLog/WaterLogSheet";
import { useSelector } from 'react-redux';
import { Alert } from "react-native";
import SettingScreen from "../Setting Screen/setting_screen";
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from "../Setting Screen/update_profile";
import LocalNotification from "../../components/notification";
import HydrationTips from "../Setting Screen/hydration_tips";
import Colors from "../../colors";


const Stack = createStackNavigator();

export default function NavigationDashboard() {

  const dailyWaterGoal = useSelector((state) => state.dailyWaterGoal.dailyWaterGoal);
  const tabBgColor = Colors.primaryColor

  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? Colors.thirdText : Colors.secondaryText}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  const refRBSheet = useRef();

  const updateBottomSheetState = (state) => {
    if (state == 'open') {
      refRBSheet.current.open()
    } else {
      refRBSheet.current.close()
    }
  }

  return (
    <NavigationContainer>

      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        screenOptions={{ headerShown: false }}
        style={styles.bottomBar}
      
        shadowStyle={styles.shawdow}
        height={75}
        circleWidth={60}
        bgColor={tabBgColor}
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {

                dailyWaterGoal == 0 ?
                  setDailyGoalAlert() :
                  refRBSheet.current.open()

              }}
            >
              <Image
                source={require('../../assets/waterdrop.png')}
                style={{ width: 35, height: 45 }}
                resizeMode="cover"
              />

            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="title1"
          position="LEFT"
          component={HomeScreen}
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={() => (
            <Stack.Navigator>
              <Stack.Screen name="SettingScreen" component={SettingScreen}  options={{headerShown:false, headerBackTitleVisible: false }}/>
              <Stack.Screen name="UpdateProfile" component={EditProfile} options={{headerBackTitleVisible: false,  title: 'Update Profile' }}/>
              <Stack.Screen name="NotificationScreen" component={LocalNotification} options={{headerBackTitleVisible: false,  title: 'Notification' }}/>
              <Stack.Screen name="HydrationTips" component={HydrationTips} options={{
          headerBackTitleVisible: false,
          title: 'Hydration Tips',
          headerStyle: {
            backgroundColor: Colors.backgroundColor, 
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}/>
            
            </Stack.Navigator>
          )}
          position="RIGHT"
        />

      </CurvedBottomBarExpo.Navigator>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}

        customStyles={{
          container: {
            borderRadius: 12,
            height: '42%',
            backgroundColor:Colors.primaryColor
          },
          wrapper: {
            shadowColor: Colors.darkColor,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          draggableIcon: {
            backgroundColor: Colors.white
          },

        }}
      >
        <WaterLogSheetContainer listenEvent={updateBottomSheetState}></WaterLogSheetContainer>
      </RBSheet>

    </NavigationContainer>
  );
}

const setDailyGoalAlert = () => {

  Alert.alert(
    'Set your goal first',
    'You can not add water without setting your daily goal', // Message content of the alert
    [

      {
        text: 'OK',
        onPress: () => {

        }
      }

    ],

    {
      cancelable: false,
    }
  );

}