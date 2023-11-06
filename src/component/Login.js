import React, { useState, useEffect } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { uploaduser } from '../redux/userSlice'


const Login = ({ navigation }) => {

  const userReducer = useSelector((state) => state.uploaduserinfo)
  const dispatch = useDispatch()

  var [data, setData] = useState([]);
  const [showpass, setshowpass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var route = useRoute();
  useEffect(() => {
    fetch(`https://65434e0301b5e279de202812.mockapi.io/User`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, []);

  useEffect(() => {
    if (route.params?.newData) {
      setData([...data, route.params.newData]);
    }
  }, [route.params?.newData]);

  useEffect(() => {
    if (route.params?.dataUpdate) {
      fetch(`https://65434e0301b5e279de202812.mockapi.io/User`)
        .then((response) => response.json())
        .then((json) => {
          route.params.dataUpdate = json;
          setData(json);
        });
    }
  }, [route.params]);
  const handleLogin = async () => {
    const user = data.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      await dispatch(uploaduser({ user }))
      await navigation.navigate("home", { userLogin: user });
      await navigation.navigate("Home", { userLogin: user });
    } else {
      alert("Email không tồn tại! ");
    }
  };
  return (
    <View style={{ flex: 6, backgroundColor: "#FFF" }}>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ height: 148, width: 146 }}
          source={require("../../assets/img/login/Logo.png")}
        />
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={{ gap: 15 }}>
          <View
            style={{
              width: 317,
              height: 50,
              borderRadius: 5,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#ABABAB",
              justifyContent: "center",
            }}
          >
            <TextInput
              style={{
                marginLeft: 5,
                width: 300,
                height: 29,
                fontFamily: "Inter",
                fontSize: 15,
                fontStyle: "normal",
                fontWeight: "400",
                outlineStyle: "none",
                color: "#717171",
              }}
              placeholder="Số điện thoại / Email"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <View
            style={{
              width: 317,
              height: 50,
              borderRadius: 5,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#ABABAB",
              alignItems: "center",
              flexDirection: "row",
              position: "relative",
            }}
          >
            <TextInput
              style={{
                marginLeft: 5,
                width: 182,
                height: 29,
                fontFamily: "Inter",
                fontSize: 15,
                fontStyle: "normal",
                fontWeight: "400",
                outlineStyle: "none",
                color: "#717171",
              }}
              placeholder="Mật khẩu"
              secureTextEntry={showpass ? false : true}
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
            <Pressable
              style={{ position: "absolute", right: 15, top: "25%" }}
              onPress={() => setshowpass(!showpass)}
            >
              <Icon name={showpass ? "eye" : "eye-with-line"} size={25} />
            </Pressable>
          </View>
        </View>
        <View style={{ gap: 15, alignItems: "center" }}>
          <Pressable
            style={{
              width: 317,
              height: 51,
              borderRadius: 5,
              backgroundColor: "#FFB900",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#FFB900",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => handleLogin()}
          >
            <Text
              style={{
                fontFamily: "Inter",
                fontSize: 18,
                fontWeight: "700",
                letterSpacing: 0.6,
                color: "#FFF",
              }}
            >
              ĐĂNG NHẬP
            </Text>
          </Pressable>
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: 18,
              color: "#FFB900",
              fontWeight: "500",
            }}
          >
            Quên mật khẩu?
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            height: 29,
            color: "#717171",
            fontFamily: "Inter",
            fontSize: 18,
            fontWeight: "400",
            letterSpacing: 0.6,
          }}
        >
          Bạn chưa có tài khoản?
        </Text>
        <Text
          onPress={() => navigation.navigate("Đăng ký tài khoản")}
          style={{
            height: 29,
            color: "#FFB900",
            fontFamily: "Inter",
            fontSize: 18,
            fontWeight: "400",
            letterSpacing: 0.6,
          }}
        >
          Đăng ký
        </Text>
      </View>
    </View>
  );
};

export default Login;
