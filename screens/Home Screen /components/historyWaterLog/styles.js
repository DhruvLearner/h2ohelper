import { StyleSheet } from "react-native";
import Colors from "../../../../colors";

export const styles = StyleSheet.create({
    mainContainer:{
        marginVertical:10,
    },
    container: {
        display:'flex',
        flexDirection:'column', 
        marginHorizontal: 10
    },
    headerView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between' ,
        alignItems:'center',
        marginBottom: 5,
    },
    headerText:{
        fontSize:16,
        fontFamily:'Poppins-Bold',
    },
    editText: {
        color: 'blue', 
        fontSize: 14, 
        fontFamily:'Poppins-SemiBold',
      },
      item_container:{
        borderRadius:8,
        flex:1,
        backgroundColor: Colors.primaryColor,
        marginHorizontal: 6,
      },
      item_style: {
        padding: 18,
        marginVertical: 8,
        fontFamily:'Poppins-Bold',
        color:'#ffffff'

      },
      deleteButton: {
        position: 'absolute',
        top: -4,
        right: 4,
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 1,
        zIndex: 1,
      },
      deleteButtonText: {
        color: 'white',
        fontSize: 16,
      },
      
      
  });