import { StyleSheet } from "react-native";
import Colors from "../../colors";

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 20,
      },
      shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5
      },
      button: {
        flex: 1,
        justifyContent: 'center',
      },
      btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 22,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
      },
      imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
      },
      tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      img: {
        width: 30,
        height: 30,
      },
      screen1: {
        flex: 1,
        
      },
      screen2: {
        flex: 1,
       
      },
  });