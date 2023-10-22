import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        display:'flex',
        flexDirection:'column', 
        margin: 10
    },
    headerView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between' ,
        alignItems:'center',
        marginBottom: 5
    },
    headerText:{
        fontSize:16,
        fontWeight:'bold'
    },
    editText: {
        color: 'blue', 
        fontSize: 14, 
        fontWeight: 'bold',
      },
    container: {
        minHeight: 100,
        backgroundColor: 'darkblue',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    goalText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    editText2:{
        color: '#FFFFFF',
        fontSize: 14, 
        fontWeight: 'bold',
        padding: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 60,
        textAlign: 'center',
        borderRadius: 12, 
        marginTop: 10,
        overflow: "hidden"
    },
    editBtn: {
        borderRadius: "100%"
    }
    
});