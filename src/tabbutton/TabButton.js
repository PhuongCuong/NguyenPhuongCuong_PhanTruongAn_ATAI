import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../component/Home";
import Cart from "../component/Cart";
import Bell from "../component/Bell";
import Personal from "../component/Personal";
import Icon from "react-native-vector-icons/Entypo";
import IconANT from "react-native-vector-icons/AntDesign";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import _ from "lodash";

const Search = () => {
  return (
    <View
      style={{
        width: 328,
        height: 35,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#DDD",
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <IconANT style={{ marginLeft: 5 }} name="search1" size={20} />
      <TextInput
        style={{
          width: 214,
          height: 20,
          color: "#909090",
          fontFamily: "Inter",
          fontSize: 17,
          fontStyle: "italic",
          fontWeight: "400",
          lineHeight: "normal",
          outlineStyle: "none",
          marginLeft: 10,
        }}
        placeholder="Bạn cần tìm kiếm gì hôm nay ?"
      />
      <TouchableOpacity
        style={{
          width: 35,
          height: 35,
          left: 82,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/img/icon/cart.png")}
          style={{ width: 34, height: 34 }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const Personnaltitle = () => {
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffb900",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: 700,
          alignSelf: "center",
          color: "white",
        }}
      >
        Cá nhân
      </Text>
    </View>
  );
};
const ThongBaoTitle = () => {
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffb900",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: 700,
          alignSelf: "center",
          color: "white",
        }}
      >
        Thông báo
      </Text>
    </View>
  );
};
const CartTitle = () => {
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffb900",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: 700,
          alignSelf: "center",
          color: "white",
        }}
      >
        Giỏ hàng
      </Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { navigation, route } = props;

  const [userinfo, setUser] = useState({});

  useEffect(() => {
    if (
      route.params &&
      route.params.userLogin &&
      !_.isEmpty(route.params.userLogin)
    ) {
      setUser(route.params.userLogin);
    }
  }, [route.params]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
            />
          );
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => Search(),
          headerStyle: {
            display: "flex",
            backgroundColor: "#FFB900",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          headerTitle: () => CartTitle(),
          headerStyle: {
            display: "flex",
            backgroundColor: "#FFB900",
            justifyContent: "center",
            alignItems: "center",
          },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="bell"
        component={Bell}
        initialParams={{
          // userPersonal: userinfo && !_.isEmpty(userinfo) ? userinfo : {},
          userPersonal: userinfo,
        }}
        options={{
          headerTitle: () => ThongBaoTitle(),
          headerStyle: {
            display: "flex",
            backgroundColor: "#FFB900",
            justifyContent: "center",
            alignItems: "center",
          },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="personal"
        component={Personal}
        initialParams={{
          // userPersonal: userinfo && !_.isEmpty(userinfo) ? "123" : userinfo,
          updatedUser: userinfo,
        }}
        options={{
          headerTitle: () => Personnaltitle(),
          headerStyle: {
            display: "flex",
            backgroundColor: "#FFB900",
            justifyContent: "center",
            alignItems: "center",
          },
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabButton;
