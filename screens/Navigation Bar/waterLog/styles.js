import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sheetContainer:{
        display:'flex',
        flexDirection:'row',
        flex: 1,
        flexWrap: 'wrap',
        rowGap: 10,
        columnGap: 10,
        alignContent:'center',
        paddingHorizontal:10,
    },
    addWater:{
        paddingHorizontal:10,
        paddingVertical:20,
        marginRight:5,
        minWidth: 80,
        borderRadius: 10,
        backgroundColor:"#4fb3ff"
    },
    mlText : {
        fontWeight:'bold',
        color:'white',
        textAlign: 'center'
    }

  });