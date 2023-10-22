import NavigationDashboard from './screens/Navigation Bar/navigation_dash';
import React from 'react';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationDashboard></NavigationDashboard>
    </Provider>
  );
}
