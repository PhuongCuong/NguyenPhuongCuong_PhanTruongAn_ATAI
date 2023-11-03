<<<<<<< HEAD
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../component/Home";
import Cart from "../component/Cart";
import Bell from "../component/Bell";
import Personal from "../component/Personal";
import Icon from "react-native-vector-icons/Entypo";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
const Tab = createBottomTabNavigator();

const TabButton = () => {
  var route = useRoute();
  var [user, setUser] = useState(route.params.userLogin);
  useEffect(() => {
    setUser(route.params.userLogin);
  }, [route.params]);
  //   console.log(user);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let icon;
          let rn = route.name;

          if (rn === "Home") {
            icon = "home";
          } else if (rn === "cart") {
            icon = "shopping-cart";
          } else if (rn === "bell") {
            icon = "bell";
          } else {
            icon = "user";
          }

          return (
            <Icon
              name={icon}
              size={24}
              color={focused ? "#E81725" : "#5D5D5D"}
=======
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../component/Home';
import Cart from '../component/Cart';
import Bell from '../component/Bell';
import Personal from '../component/Personal';
import Icon from 'react-native-vector-icons/Entypo';
import IconANT from 'react-native-vector-icons/AntDesign'
import { View } from 'react-native-web';
import { TextInput } from 'react-native';

const Search = () => {
    return (
        <View style={{
            width: 328, height: 35, borderWidth: 1, borderStyle: "solid",
            borderColor: "#DDD", borderRadius: 10, backgroundColor: "#DDDDDD",
            alignItems: "center", flexDirection: "row"
        }}>
            <IconANT style={{ marginLeft: 5 }} name='search1' size={20} />
            <TextInput style={{
                width: 214, height: 20, color: "#909090",
                fontFamily: "Inter", fontSize: 17,
                fontStyle: 'italic',
                fontWeight: "400",
                lineHeight: "normal",
                outline: "none",
                marginLeft: 10
            }} placeholder='Bạn cần tìm kiếm gì hôm nay ?' />
        </View>
    )
}

const Tab = createBottomTabNavigator();

const TabButton = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
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
                options={{
                    headerTitle: () => Search(),
                    headerStyle: {
                        display: "flex",
                        backgroundColor: "#FFB900",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
>>>>>>> 93bf75af4b7f1e98ed2a74baf317c1cb1a06f23c
            />
          );
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="cart" component={Cart} />
      <Tab.Screen name="bell" component={Bell} />
      <Tab.Screen
        name="personal"
        component={Personal}
        initialParams={{ userPersonal: user }}
      />
    </Tab.Navigator>
  );
};

export default TabButton;
