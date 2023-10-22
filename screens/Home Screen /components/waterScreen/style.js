import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:'#4fb3ff',
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
        marginBottom: 20
    },
    progressText:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20
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
       marginLeft: 20
    }
  });