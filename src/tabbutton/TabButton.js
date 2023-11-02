import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../component/Home';
import Cart from '../component/Cart';
import Bell from '../component/Bell';
import Personal from '../component/Personal';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const TabButton = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                let icon;
                let rn = route.name;
                if (rn === "home") {
                    icon = "home"
                } else if (rn === "cart") {
                    icon = "shopping-cart"
                } else if (rn === "bell") {
                    icon = "bell"
                } else {
                    icon = "user"
                }

                return <Icon name={icon} size={24} color={focused ? "#E81725" : "#5D5D5D"} />
            },
            tabBarLabel: () => null
        })}>
            <Tab.Screen name='home' component={Home}

            />
            <Tab.Screen name='cart' component={Cart}

            />
            <Tab.Screen name='bell' component={Bell}

            />
            <Tab.Screen name='personal' component={Personal}

            />
        </Tab.Navigator>
    );
};

export default TabButton;