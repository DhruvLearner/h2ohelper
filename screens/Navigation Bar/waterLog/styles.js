import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
      borderWidth: 0,
      
    },
    mlText: {
      
      textAlign: 'center',
      fontFamily:'',
      
    },
    selectedValueContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedText: {
      
    },
    selectedValueText: {
      margin: 10,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily:'',
      fontSize:18
      
    },
    submitButton: {
      
      borderRadius: 8,
      padding: 10,
      alignSelf: 'center', 
  },
    
    buttonText: {
      
      fontSize: 18,
      marginHorizontal:35,
      fontFamily:'',
      fontWeight: 'bold',
      textAlign: 'center'
      
    
    },
    disabledSubmitButton: {
      backgroundColor: 'gray', 
    }
  });