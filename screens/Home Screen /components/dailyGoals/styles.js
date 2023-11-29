import { StyleSheet } from "react-native";
import Colors from "../../../../colors";

export const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
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
        color: 'grey',
        fontSize: 14,
        fontFamily: '',

    },
    container: {
        minHeight: 100,
        // backgroundColor: Colors.secondaryColor,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colors.secondaryColor,
    },
    goalText: {
        fontSize: 30,
        fontFamily: '',
        color: '#FFFFFF'
    },
    setGoalMsgText: {
        fontSize: 24,
        fontFamily: '',
        color: '#FFFFFF'
    },
    editText2: {
        color: '#FFFFFF',
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