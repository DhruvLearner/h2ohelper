import { StyleSheet } from "react-native";
import Colors from "../../../../colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        minHeight: 350,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
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
        fontFamily: '',
        fontWeight: "bold"
    },
    progressText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: '',
    },
    visualContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    waterProgressText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        fontFamily: '',
    },
    
    lottie: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        height:"100%",
        width:'100%',
        pointerEvents: 'none',
    }
});