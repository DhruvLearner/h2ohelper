import NavigationDashboard from './screens/Navigation Bar/navigation_dash';
import React from 'react';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { useFonts } from '@expo-google-fonts/poppins';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  return (
    <Provider store={store}>
    <NavigationDashboard></NavigationDashboard>
    </Provider>
  );
}
