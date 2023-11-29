import { StyleSheet } from "react-native";
import Colors from "../../colors";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
       
    },
    
    nameView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems:'center',
        marginVertical:40,
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    genderTextStyle:{
        fontSize:16,
        color:'gray',
        marginTop:10,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    optionTextStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.secondaryColor
    },
    option: {
        marginBottom: 12,
        padding: 14,
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    versionStyle:{
        fontSize:14,
        color:'gray',
        textAlign:'center',
        marginTop:30
    }
});