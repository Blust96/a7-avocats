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
                title: 'Accueil',
                headerStyle: {
                    backgroundColor: '#7aca7c',
                    borderBottomWidth: 0,
                },
                headerTintColor: 'transparent'
            }
        },
        Chat: { 
            screen: ChatScreen,
            navigationOptions: {
                title: 'Chat',
                headerStyle: {
                    backgroundColor: '#ffffff',
                    borderBottomRightRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    shadowColor: '#000000',
                    shadowOpacity: 0.1,
                    shadowRadius: 18,
                },
                headerTintColor: '#7aca7c',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
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
                title: 'Suivi de dossier',
                headerStyle: {
                    backgroundColor: '#ffffff',
                    borderBottomRightRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    shadowColor: '#000000',
                    shadowOpacity: 0.1,
                    shadowRadius: 18,
                },
                headerTintColor: '#7aca7c',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default MainStackNavigator;