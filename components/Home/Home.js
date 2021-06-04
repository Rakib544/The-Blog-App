import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../../pages/MainScreen';
import { SettingsScreen } from '../../App';
import BookMark from '../../pages/BookMark/BookMark';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'MainScreen') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'deepskyblue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="MainScreen" component={MainScreen} />
            <Tab.Screen name="Bookmark" component={BookMark} />
        </Tab.Navigator>
    );
};

export default Home;