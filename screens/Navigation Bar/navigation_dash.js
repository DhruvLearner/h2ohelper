import React, { useRef, useState } from "react";
import {
  Animated,
  TouchableOpacity,
  View,
  Button,
  Text
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles';
import { Image } from 'react-native';
import HomeScreen from '../Home Screen /home_screen';
import RBSheet from "react-native-raw-bottom-sheet";
import WaterLogSheet from "./waterLog/WaterLog";
import WaterLogSheetContainer from "./waterLog/WaterLog";


const Screen1 = () => {
  return <HomeScreen></HomeScreen>;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};


export default function NavigationDashboard() {
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
        color={routeName === selectedTab ? 'black' : 'gray'}
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
    if(state == 'open'){
      refRBSheet.current.open()
    }else{
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
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => refRBSheet.current.open()}
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
          component={() => <Screen1 />}
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={() => <Screen2 />}
          position="RIGHT"
          options={{ headerShown: true }}
        />

      </CurvedBottomBarExpo.Navigator>
      
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
       
        customStyles={{
          container: {
            borderRadius:12,
          },
          wrapper: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          draggableIcon: {
            backgroundColor: "black"
          }
        }}
      >
       <WaterLogSheetContainer listenEvent={updateBottomSheetState}></WaterLogSheetContainer>
      </RBSheet>
    </NavigationContainer>
  );
}