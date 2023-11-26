
import React from 'react'
import {store} from '../Redux/store';
import { Provider } from 'react-redux';
import NavigationDashboard from './Navigation Bar/navigation_dash';

export default function MainScreen() {
  return (
      <NavigationDashboard></NavigationDashboard>
  )
}