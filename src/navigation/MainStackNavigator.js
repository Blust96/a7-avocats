/*
Import
*/
// NodeJS
import React from 'react';
import { StackNavigator } from 'vue-native-router';
// Inner
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import FolderTrackingScreen from '../screens/FolderTrackingScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
//

const MainStackNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Accueil'
            }
        },
        Chat: { 
            screen: ChatScreen,
            navigationOptions: {
                title: 'Chat'
            }
        },
        Appointment: { 
            screen: AppointmentScreen,
            navigationOptions: {
                title: 'Prise de rendez-vous'
            }
        },
        FolderTracking: {
            screen: FolderTrackingScreen,
            navigationOptions: {
                title: 'Suivi de dossier'
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default MainStackNavigator;