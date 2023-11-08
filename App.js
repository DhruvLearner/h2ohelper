import NavigationDashboard from './screens/Navigation Bar/navigation_dash';
import React, { useEffect } from 'react';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { useFonts } from '@expo-google-fonts/poppins';
import * as Notifications from 'expo-notifications';
// import { AppLoading } from 'expo';



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
  handleSuccess: (notificationId) => {
    

  },
  handleError: (notification, error) => {
    
  }
})


export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  //   '': require('./assets/fonts/.ttf'),
  //   '': require('./assets/fonts/.ttf'),
  // }) ;


  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
     
    });
    
    return () => {
      subscription.remove();
    }
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      
    });
    
    return () => {
      subscription.remove();
    }
  }, []);


  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  
    return (
      <Provider store={store}>
        <NavigationDashboard></NavigationDashboard>
      </Provider>
    );
 
}
