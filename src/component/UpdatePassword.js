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
export default function UpdatePassword({ navigation }) {
  var route = useRoute();
  const [showPass, setShowPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  var [data, setData] = useState(route.params.user);
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const updatePassword = () => {
    if (password !== data.password) {
      alert("Mật khẩu hiện tại không đúng!");
    } else if (confirmPass === newPass) {
      const updatedPass = {
        ...data,
        password: newPass,
      };
      fetch(
        `https://65434e0301b5e279de202812.mockapi.io/User/${updatedPass.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPass),
        }
      )
        .then((response) => response.json())
        .then((json) => {
          setData(updatedPass);
          navigation.navigate("personal", { userPersonal: updatedPass });
          alert("Đổi mật khẩu thành công");
        });
    } else {
      alert("Mật khẩu xác nhận không đúng !");
    }
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
          style={{ height: 120, width: 120, top: "27%" }}
          source={require("../../assets/img/icon/key.png")}
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
        <View
          style={{
            width: 317,
            height: 50,
            flexDirection: "row",
            position: "relative",
          }}
        >
          <TextInput
            placeholder={"Mật khẩu hiện tại"}
            onChangeText={(text) => setPassword(text)}
            style={{
              marginTop: 25,
              color: "#717171",
              width: 250,
              height: 35,
              fontSize: 18,
              fontWeight: 400,
              outline: "none",
            }}
            secureTextEntry={showPass ? false : true}
          ></TextInput>
          <Pressable
            style={{ position: "absolute", right: 15, top: "50%" }}
            onPress={() => setShowPass(!showPass)}
          >
            <Icon name={showPass ? "eye" : "eye-with-line"} size={25} />
          </Pressable>
        </View>
        <View style={styles.borderLine} />
        <View
          style={{
            width: 317,
            height: 50,
            flexDirection: "row",
            position: "relative",
          }}
        >
          <TextInput
            placeholder={"Mật khẩu mới"}
            onChangeText={(text) => setNewPass(text)}
            style={{
              marginTop: 25,
              color: "#717171",
              width: 250,
              height: 35,
              fontSize: 18,
              fontWeight: 400,
              outline: "none",
            }}
            secureTextEntry={showNewPass ? false : true}
          ></TextInput>
          <Pressable
            style={{ position: "absolute", right: 15, top: "50%" }}
            onPress={() => setShowNewPass(!showNewPass)}
          >
            <Icon name={showNewPass ? "eye" : "eye-with-line"} size={25} />
          </Pressable>
        </View>
        <View style={styles.borderLine} />
        <View
          style={{
            width: 317,
            height: 50,
            flexDirection: "row",
            position: "relative",
          }}
        >
          <TextInput
            placeholder={"Xác nhận mật khẩu"}
            onChangeText={(text) => setConfirmPass(text)}
            style={{
              marginTop: 25,
              color: "#717171",
              width: 250,
              height: 35,
              fontSize: 18,
              fontWeight: 400,
              outline: "none",
            }}
            secureTextEntry={showConfirmPass ? false : true}
          ></TextInput>
          <Pressable
            style={{ position: "absolute", right: 15, top: "50%" }}
            onPress={() => setShowConfirmPass(!showConfirmPass)}
          >
            <Icon name={showConfirmPass ? "eye" : "eye-with-line"} size={25} />
          </Pressable>
        </View>
        <View style={styles.borderLine} />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Pressable
          onPress={updatePassword}
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
  },
  borderLine: {
    marginTop: 15,
    borderBottomWidth: 1, // Độ rộng của border dưới
    borderBottomColor: "black", // Màu sắc của border dưới
    width: "320px", // Chiều rộng của đường dưới, có thể điều chỉnh theo nhu cầu
    alignSelf: "center", // Canh chỉnh theo trung tâm
  },
});
