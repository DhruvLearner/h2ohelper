import { StyleSheet } from "react-native";
import Colors from "../../../../colors";

export const styles = StyleSheet.create({
  containerA:{
    marginVertical:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignSelf:'center',
   
  }, 
    container: {
        display:'flex',
        flexDirection:'column', 
        marginHorizontal: 10,
        
    },
    headerView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between' ,
        alignItems:'center',
        marginTop:10,
       
    },
    headerText:{
        fontSize:16,
        fontFamily:'',
        fontWeight: "bold"
    },
    editText: {
        color: 'blue', 
        fontSize: 14, 
        fontFamily:'',
      },
      item_container:{
        borderRadius:8,
        backgroundColor: Colors.primaryColor,
        marginHorizontal: 6,
        paddingBottom:0,
      },
      item_style: {
       paddingHorizontal:18,
       paddingVertical:12,
        marginVertical: 8,
        fontFamily:'',
        color:'#ffffff',
        fontWeight:'500'
  
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