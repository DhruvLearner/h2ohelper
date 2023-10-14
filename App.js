import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home Screen /home_screen';
import NavigationDashboard from './screens/Navigation Bar/navigation_dash';

export default function App() {
  return (
  <NavigationDashboard></NavigationDashboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
