/*
Import
*/
// NodeJS
import React from 'react';
import { TabNavigator, StackNavigator } from 'vue-native-router';
import { Entypo } from '@expo/vector-icons';
// Inner
import ChatScreen from '../screens/ChatScreen';
import NewsScreen from '../screens/NewsScreen';
import FolderTrackingScreen from '../screens/FolderTrackingScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
//

const ChatNavigation = StackNavigator(
    {
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
        }
    },
    {
        initialRouteName: 'Chat'
    }
);

const NewsNavigation = StackNavigator(
    {
        News: {
            screen: NewsScreen,
            navigationOptions: {
                title: 'Actualités'
            }
        },
        Chat: { 
            screen: ChatScreen,
            navigationOptions: {
                title: 'Chat'
            }
        },
    },
    {
        initialRouteName: 'News'
    }
);

const FolderTrackingNavigation = StackNavigator(
    {
        FolderTracking: {
            screen: FolderTrackingScreen,
            navigationOptions: {
                title: 'Suivi de dossier'
            }
        }
    },
    {
        initialRouteName: 'FolderTracking'
    }
);

export default TabNavigator(
    {
        ChatScreen: {
            screen: ChatNavigation,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Chat',
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Entypo name="chat" size={28} color="#4286f4" />;
                },
            })
        },
        NewsScreen: {
            screen: NewsNavigation,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Actualités',
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Entypo name="news" size={28} color="#4286f4" />;
                },
            })
        },
        FolderTrackingScreen: {
            screen: FolderTrackingNavigation,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Suivi',
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Entypo name="folder" size={28} color="#4286f4" />;
                },
            })
        } 
    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'ChatScreen',
    }
);