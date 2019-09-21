import React from 'react';
import { View, Text } from 'react-native';
// import { createAppContainer,createStackNavigator } from 'react-navigation';
// import {  } from 'react-navigation-stack';
import Homescreen from './pages/Homescreen';
import wushop from './pages/wushop';
import staff from './pages/staff';
import booking from './pages/booking';
import map from './pages/map';
import customer from './pages/customer';
import graph from './pages/graph';
import profile from './pages/profile';
import searchstaff from './pages/searchstaff';
// import staff from './pages/staff';
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import pack from './pages/package';


const app = createStackNavigator({
  Homescreen:{
    screen:Homescreen,
    navigationOptions: {
      title: 'WU Tour ',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  map:{
    screen:map,
    navigationOptions: {
      title: 'Map',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  wushop:{
    screen:wushop,
    navigationOptions: {
      title: 'WUshop',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  staff:{
    screen:staff,
    navigationOptions: {
      title: 'Staff',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  searchstaff:{
    screen:searchstaff,
    navigationOptions: {
      title: 'Search Staff',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  package:{
    screen:pack,
    navigationOptions: {
      title: 'Package',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  profile:{
    screen:profile,
    navigationOptions: {
      title: 'Profile',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  graph:{
    screen:graph,
    navigationOptions: {
      title: 'Graph',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  booking:{
    screen:booking,
    navigationOptions: {
      title: 'Booking',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
  customer:{
    screen:customer,
    navigationOptions: {
      title: 'Customer',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerStyle: { backgroundColor: '#0566CF'}, 
      headerTintColor: '#ffffff',
      
    },
  },
})

export default createAppContainer(app);
