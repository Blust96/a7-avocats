/*
Import
*/
// NodeJS
import React from 'react';
import { TabNavigator, StackNavigator } from 'vue-native-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Inner
import ChatScreen from '../screens/ChatScreen';
import NewsScreen from '../screens/NewsScreen';
import FolderTrackingScreen from '../screens/FolderTrackingScreen';
//

export default TabNavigator(
    {
        ChatScreen: {
            screen: ChatScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Chat',
                tabBarIcon: ({ focused, tintColor }) => {
                    return <MaterialCommunityIcons name="face-profile" size={32} color="#4286f4" />;
                },
            })
        },
        NewsScreen: {
            screen: NewsScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Actualités',
                tabBarIcon: ({ focused, tintColor }) => {
                    return <MaterialCommunityIcons name="face-profile" size={32} color="#4286f4" />;
                },
            })
        },
        FolderTrackingScreen: {
            screen: FolderTrackingScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Suivi',
                tabBarIcon: ({ focused, tintColor }) => {
                    return <MaterialCommunityIcons name="face-profile" size={32} color="#4286f4" />;
                },
            })
        } 
    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'ChatScreen',
    }
);