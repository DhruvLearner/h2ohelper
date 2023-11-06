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
    console.log("Handle success : ", notificationId)

  },
  handleError: (notification, error) => {
    console.log("Handler failed ", error.message)
  }
})


export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  }) ;


  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log('Notification Received:', notification);
    });
    console.log('Receive Subscription:', subscription);
    return () => {
      subscription.remove();
    }
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification Response:', response);
    });
    console.log('Interaction Subscription:', subscription);
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
