import { StyleSheet } from "react-native"
import Colors from "../colors";

const style = StyleSheet.create({
    maincontainer:{
        paddingHorizontal:10,
        paddingVertical:20,
    },
    container:{
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:10,
    
    },
    headingStyle:{
        fontWeight:'bold',
        fontSize:18,
    },
    textInputView:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent:'center',
        alignSelf:'flex-start',
    },
    input: {
        width: 80,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical:10,
        padding: 10,
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
        backgroundColor: Colors.primaryColor,
        padding: 8,
        borderRadius: 4,
        paddingHorizontal:50,
        marginVertical:10
      },
      saveText:{
        color:'white',
        fontSize:16
      }
})

export default style;