import { StyleSheet } from "react-native";
import Colors from "../../colors";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
       height:'100%',
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
        fontSize: 26,
        fontWeight: 'bold'
    },
    genderTextStyle:{
        fontSize:16,
        marginTop:10,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    optionTextStyle: {
        fontSize: 16,
        fontWeight: '600'
        
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    versionStyle:{
        fontSize:14,
        color:'gray',
        textAlign:'center',
        marginTop:30
    }
});