import { StyleSheet } from "react-native";
import Colors from "../../../../colors";

export const styles = StyleSheet.create({
    container: {
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
        fontSize: 25,
        textAlign: "center",
        marginBottom: 20,
        fontFamily: '',
        fontWeight: "bold"
    },
    progressText: {
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