import { StyleSheet } from "react-native";
import Colors from "../../../colors";

export 
const styles = StyleSheet.create({
    sheetContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center', 
     alignItems: 'center',
      flex: 1,
      flexWrap: 'wrap',
      rowGap: 20,
      columnGap: 10,
      alignContent: 'center',
      paddingHorizontal: 10,
      height:800,
      backgroundColor:Colors.primaryColor
     
    }, 
    addWater: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginRight: 5,
      minWidth: 80,
      borderRadius: 10,
      //backgroundColor: "#efefef", 
      borderWidth: 0,
      
    },
    selectedValue: {
      backgroundColor: Colors.secondaryColor,
      borderColor: Colors.darkColor, 
      color:Colors.darkColor
    },
    mlText: {
      color: Colors.darkColor, 
      textAlign: 'center',
      fontFamily:'',
      
    },
    selectedValueContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedText: {
      color: Colors.darkColor, 
    },
    selectedValueText: {
      margin: 10,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily:'',
      fontSize:18,
      color:Colors.secondaryText
      
    },
    submitButton: {
      backgroundColor: Colors.secondaryColor, 
      borderRadius: 8,
      padding: 10,
      alignSelf: 'center', 
  },
    
    buttonText: {
      color: Colors.primaryText,
      fontSize: 18,
      marginHorizontal:35,
      fontFamily:'',
      fontWeight: 'bold',
      textAlign: 'center'
      
    
    },
    disabledSubmitButton: {
      backgroundColor: 'gray', 
    },
    disabledButtonText: {
      color: Colors.lightColor, 
    },
  });