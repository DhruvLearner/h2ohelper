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
     
    },
    addWater: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginRight: 5,
      minWidth: 80,
      borderRadius: 10,
      //backgroundColor: "#efefef", 
      borderWidth: 1,
      
    },
    selectedValue: {
      backgroundColor: "#efefef",
      borderColor: "black", 
      color:'black'
    },
    mlText: {
      color: 'black', 
      textAlign: 'center',
      fontFamily:'Poppins-Regular',
      
    },
    selectedValueContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedText: {
      color: 'black', 
    },
    selectedValueText: {
      margin: 10,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily:'',
      fontSize:18,
      
    },
    submitButton: {
      backgroundColor: Colors.primaryColor, 
      borderRadius: 8,
      padding: 5,
     alignSelf: 'center', 
  },
    
    buttonText: {
      color: 'white',
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
      color: 'white', 
    },
  });