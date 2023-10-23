import { StyleSheet } from "react-native";
import Colors from "../../../../colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.primaryColor,
        minHeight: 350,
        borderBottomLeftRadius: '25%',
        borderBottomRightRadius: '25%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    screenHeader: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: "center",
        marginBottom: 20,
        fontFamily:'Poppins-SemiBold',
    },
    progressText:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily:'Poppins-Bold',
    },
    visualContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    waterProgressText: {
       color: '#FFFFFF',
       fontSize: 20,
       fontWeight: 'bold',
       marginLeft: 20,
       fontFamily:'Poppins-SemiBold',
    }
  });