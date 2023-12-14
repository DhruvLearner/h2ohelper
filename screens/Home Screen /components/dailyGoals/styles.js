import { StyleSheet } from "react-native";
import Colors from "../../../../colors";

export const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10
    },
    headerView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop:5,
    },
    headerText: {
        fontSize: 16,
        fontFamily: '',
        fontWeight: "bold"
    },
    editText: {
        fontSize: 14,
        fontFamily: '',

    },
    container: {
        minHeight: 100,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    goalText: {
        fontSize: 30,
        fontFamily: '',
        
    },
    setGoalMsgText: {
        fontSize: 24,
        fontFamily: '',
        color: Colors.lightColor
    },
    editText2: {
        color: Colors.lightColor,
        fontSize: 13,
        fontFamily: '',
        padding: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 60,
        textAlign: 'center',
        borderRadius: 12,
        marginTop: 10,
        overflow: "hidden"
    },
    editBtn: {
        borderRadius: 100
    }

});