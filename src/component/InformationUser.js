import React, { useState, useEffect } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useRoute } from "@react-navigation/native";
export default function InformationUser({ navigation }) {
  var route = useRoute();
  var [data, setData] = useState(route.params.user);
  var [fullName, setFullName] = useState(data.fullname);
  var [phone, setPhone] = useState(data.phone);
  var [email, setEmail] = useState(data.email);
  const updateUser = () => {
    const updatedUser = {
      email: email,
      password: data.password,
      fullname: fullName,
      cart: [],
      phone: phone,
      id: data.id,
    };

    fetch(
      `https://65434e0301b5e279de202812.mockapi.io/User/${updatedUser.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setData(updatedUser);
        navigation.navigate("personal", { userPersonal: updatedUser });
        alert("Cập nhật thành công");
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ height: 110, width: 110 }}
          source={require("../../assets/img/icon/user.png")}
        />
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            marginTop: 20,
            fontSize: 13,
            alignSelf: "flex-start",
            fontWeight: 400,
          }}
        >
          Họ và tên
        </Text>
        <TextInput
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          style={{
            marginTop: 5,
            width: 360,
            height: 35,
            borderBottomWidth: "1px",
            fontSize: 18,
            fontWeight: 600,
            outline: "none",
          }}
        ></TextInput>
        <Text
          style={{
            marginTop: 20,
            fontSize: 13,
            alignSelf: "flex-start",
            fontWeight: 400,
          }}
        >
          Số điện thoại
        </Text>
        <TextInput
          onChangeText={(text) => setPhone(text)}
          value={phone}
          style={{
            marginTop: 5,
            width: 360,
            height: 35,
            borderBottomWidth: "1px",
            fontSize: 18,
            fontWeight: 600,
            outline: "none",
          }}
        ></TextInput>
        <Text
          style={{
            marginTop: 20,
            fontSize: 13,
            alignSelf: "flex-start",
            fontWeight: 400,
          }}
        >
          Email
        </Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={{
            marginTop: 5,
            width: 360,
            height: 35,
            borderBottomWidth: "1px",
            fontSize: 18,
            fontWeight: 600,
            outline: "none",
          }}
        ></TextInput>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Pressable
          onPress={updateUser}
          style={{
            marginTop: -80,
            width: 280,
            height: 45,
            backgroundColor: "#FFB900",
            borderRadius: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              alignSelf: "center",
              color: "white",
            }}
          >
            CẬP NHẬT
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginTop: 5,
    width: 360,
    height: 35,
    borderBottomWidth: "1px",
    fontSize: 18,
    fontWeight: 600,
    outline: "none",
  },
});
