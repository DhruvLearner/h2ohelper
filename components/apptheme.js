import { View, Text, Switch, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../colors';
import { useSelector, useDispatch } from 'react-redux';
import { updateDarkThemeSetting } from '../Redux/slice/setting_slice';


export default function AppTheme() {
    const dispatch = useDispatch();
    const [colors, setColors] = useState(null);
    const isDarkTheme = useSelector((state) => state.setting.darkTheme);

    
    useEffect(() => {
        if (isDarkTheme == true) {
            setColors(darkTheme)
        }else{
            setColors(lightTheme)
        }
    }, [isDarkTheme]);

    const toggleSwitch = () => {
        dispatch(updateDarkThemeSetting(!isDarkTheme));
    };

    if (!colors) {
        return null; // or render a loading indicator while colors are being fetched
    }

    return (
        <View style={[style.maincontainer, {backgroundColor : isDarkTheme ? colors.secondaryColor : lightTheme.white}]}>
            <Text style={style.headingStyle}>Change Theme : </Text>
            <View style={style.container}>
                <Switch
                    onValueChange={toggleSwitch}
                    value={isDarkTheme}
                    trackColor={{ false: '#daecec', true: colors.primaryColor }}
                    ios_backgroundColor="#daecec"
                />
                <Text style={{ color: colors.thirdText }}> {isDarkTheme ? 'Dark Theme' : 'Light Theme'} </Text>
            </View>
        </View>
    );
}


const style = StyleSheet.create({
    maincontainer:{
        paddingHorizontal:10,
        paddingVertical:20,
        flex: 1,
    },
    darkTheme:{

    },
    container:{
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:10
    },
    headingStyle:{
        fontWeight:'bold',
        fontSize:18,
        // color: Colors.thirdText
    },
    textInputView:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent:'center',
        alignSelf:'flex-start'
    },
    input: {
        width: 80,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical:10,
        padding: 10,
        // color: Colors.thirdText
      },
      errorText:{
        color:'red', 
        paddingLeft:0
      },
      customNotificationView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      } ,
      saveBtn:{
        // backgroundColor: Colors.secondaryColor,
        padding: 8,
        borderRadius: 4,
        paddingHorizontal:50,
        marginVertical:10
      },
      saveText:{
        // color:Colors.lightColor,
        fontSize:16,
        fontWeight:'bold',
        // color: Colors.thirdText
      }
})
