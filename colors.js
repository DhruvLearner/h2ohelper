// colors.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getThemePreference = async () => {
  try {
    const isDarkTheme = await AsyncStorage.getItem('isDarkTheme');
    console.log(isDarkTheme, 'isDarkTheme');
    return isDarkTheme === 'true';
  } catch (error) {
    console.error('Error fetching theme preference:', error);
    return false; // Default to false if an error occurs
  }
};

export const darkTheme= {
    primaryColor: '#292929',
    bottomBar: '#292929',
    homeScreenenBg: "#8b8b8b",
    secondaryColor: '#575757',
    bottomSheet: "#292929",
    backgroundColor: '#8b8b8b',
    tabBgColor: '#000000',
    waterDropColor: '#000000',
    darkColor: '#FFFFFF',
    lightColor: '#000000',
    darkBlack: '#121212',
    darkGray: '#575757',
    lightGray: '#8b8b8b',
    white: '#ffffff',
    primaryText: '#000000',
    secondaryText: '#8b8b8b',
    thirdText: '#ffffff',
    black: '#000000',
    screen2Bg: "#575757",
    genderBtn: "#8b8b8b",
    tipsBg: "#292929",
    tintBgColor: "#000000",
    blackNwhite: "#FFFFFF",
    whiteNblack: "#000000"
};

export const lightTheme= {
    primaryColor: '#11bff1',
    bottomBar: '#FFFFFF',
    homeScreenenBg: "#FFFFFF",
    bottomSheet: "#FFFFFF",
    secondaryColor: '#FFFFFF',
    screen2Bg: "darkblue",
    backgroundColor: '#28318c',
    tabBgColor: '#000000',
    waterDropColor: '#000000',
    darkColor: '#000000',
    lightColor: '#FFFFFF',
    darkBlack: '#121212',
    darkGray: '#575757',
    lightGray: '#8b8b8b',
    white: '#ffffff',
    primaryText: '#000000',
    secondaryText: '#000000',
    thirdText: '#000000',
    black: '#000000',
    genderBtn: "#FFFFFF",
    tipsBg: "#FFFFFF",
    tintBgColor: "#00e0ff",
    blackNwhite: "#000000",
    whiteNblack: "#FFFFFF"
};


const colors = {
    primaryColor: '#292929',
    secondaryColor: '#575757',
    backgroundColor: '#8b8b8b',
    tabBgColor: '#000000',
    waterDropColor: '#000000',
    darkColor: '#FFFFFF',
    lightColor: '#000000',
    darkBlack: '#121212',
    darkGray: '#575757',
    lightGray: '#8b8b8b',
    white: '#ffffff',
    primaryText: '#000000',
    secondaryText: '#8b8b8b',
    thirdText: '#ffffff',
};

export default colors;
 