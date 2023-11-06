import { useState, useEffect } from "react";
import React from "react";
import { CheckBox } from "react-native-elements";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
const Registration = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  var [data, setData] = useState([]);
  const [showpass, setshowpass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [user, setUser] = useState({});
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    fetch(`https://65434e0301b5e279de202812.mockapi.io/User`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, []);
  const handleInsertUser = () => {
    if (email === "" || password === "" || fullName === "" || phone === "") {
      alert("Vui lòng nhập đầy đủ thông tin !");
    } else {
      const newUser = {
        email: email,
        password: password,
        fullname: fullName,
        cart: [],
        phone: phone,
        discount: [
          {
            id: "1",
            name: "ATAI10",
            discountPercent: 0.1,
            description: "Phiếu giảm giá 10%",
          },
        ],
        id: data.length + 1,
      };
      if (isChecked !== false) {
        fetch(`https://65434e0301b5e279de202812.mockapi.io/User`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((response) => response.json())
          .then((updatedUser) => {
            setData([...data, updatedUser]);
            alert("Đăng ký thành công!");
            navigation.navigate("login", { newData: newUser });
          });
      } else {
        alert("Vui lòng đồng ý với các điều khoản sử dụng!");
      }
    }
  };

  return (
    <View style={{ flex: 6, backgroundColor: "#FFF" }}>
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
                outline: "none",
                color: "#717171",
              }}
              placeholder="Họ và tên"
              onChangeText={(text) => setFullName(text)}
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
                outline: "none",
                color: "#717171",
              }}
              placeholder="Số điện  *"
              onChangeText={(text) => setPhone(text)}
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
                outline: "none",
                color: "#717171",
              }}
              placeholder="Email *"
              onChangeText={(text) => setEmail(text)}
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
                outline: "none",
                color: "#717171",
              }}
              placeholder="Mật khẩu *"
              secureTextEntry={showpass ? false : true}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable
              style={{ position: "absolute", right: 15, top: "25%" }}
              onPress={() => setshowpass(!showpass)}
            >
              <Icon name={showpass ? "eye" : "eye-with-line"} size={25} />
            </Pressable>
          </View>
          <View
            style={{
              width: 317,
              height: 50,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <CheckBox
              style={{ marginLeft: -10 }}
              checked={isChecked}
              onPress={toggleCheck}
              size={25}
              checkedColor="black"
              uncheckedColor="black"
            />
            <Text style={{ top: 10, fontSize: 15, color: "#717171" }}>
              Tôi đã đọc kỹ và đồng ý với các{" "}
              <Text style={{ color: "blue" }}>Điều khoản sử dụng</Text> của ATAI
            </Text>
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
            onPress={handleInsertUser}
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
              ĐĂNG KÝ
            </Text>
          </Pressable>
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
          Bạn đã có tài khoản?
        </Text>
        <Text
          onPress={() => navigation.navigate("login")}
          style={{
            height: 29,
            color: "#FFB900",
            fontFamily: "Inter",
            fontSize: 18,
            fontWeight: "400",
            letterSpacing: 0.6,
          }}
        >
          Đăng nhập
        </Text>
      </View>
    </View>
  );
};

export default Registration;
