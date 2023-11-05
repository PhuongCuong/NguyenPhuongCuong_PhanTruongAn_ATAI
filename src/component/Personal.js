import React from "react";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Modal from "react-native-modal";
const Personal = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  var [listData, setListData] = useState([]);
  const [deleteAccount, setDeleteAccount] = useState("");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleDeleteAccount = () => {
    setDeleteVisible(!isDeleteVisible);
  };
  var route = useRoute();
  var [data, setData] = useState(route.params.userPersonal);

  useEffect(() => {
    setData(route.params.userPersonal);
  }, [route.params]);

  useEffect(() => {
    fetch(`https://65434e0301b5e279de202812.mockapi.io/User`)
      .then((response) => response.json())
      .then((json) => {
        listData = json;
        setListData(json);
      });
  }, [data]);
  const handleLogOutAndUpdateData = () => {
    navigation.navigate("login", { dataUpdate: listData });
  };
  const handleDeleteAccount = () => {
    if (deleteAccount !== "XAC NHAN") {
      alert("Vui lòng nhập đúng ký tự!");
    } else {
      fetch(`https://65434e0301b5e279de202812.mockapi.io/User/${data.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          setListData(json);
        });
      navigation.navigate("login", { dataUpdate: listData });
      alert("Tài khoản đã bị xóa!");
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 5,
        }}
      >
        <Image
          style={{ height: 70, width: 70 }}
          source={require("../../assets/img/login/Logo.png")}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 700,
            alignSelf: "center",
            color: "#ffb900",
          }}
        >
          {data.fullname}
        </Text>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 15,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Thông tin tài khoản", { user: data })
          }
          // style={styles.opaci}
        >
          {/* <Image
            source={require("../../assets/img/icon/info.png")}
            style={{ width: 34, height: 34, top: "40%", left: "90%" }}
          ></Image> */}
          <Text style={styles.textOpaci}>Thông tin tài khoản</Text>
          <View style={styles.borderLine} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Đổi mật khẩu", { user: data })}
          // style={styles.opaci}
        >
          {/* <Image
            source={require("../../assets/img/icon/locked.png")}
            style={{ width: 34, height: 34, top: "40%", left: "90%" }}
          ></Image> */}
          <Text style={styles.textOpaci}>Đổi mật khẩu</Text>
          <View style={styles.borderLine} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("Button 3")}>
          <Text style={styles.textOpaci}>Giới thiệu về ATAI</Text>
          <View style={styles.borderLine} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress("Button 4")}>
          <Text style={styles.textOpaci}>Điều khoản</Text>
          <View style={styles.borderLine} />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.textOpaci}>Thoát</Text>
          <View style={styles.borderLine} />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleDeleteAccount}>
          <Text style={styles.textOpaci}>Xóa tài khoản</Text>
          <View style={styles.borderLine} />
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              borderRadius: 10,
              width: 350,
              height: 120,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Text
              style={{
                marginTop: 40,
                fontSize: 18,
                fontWeight: 600,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              Bạn có muốn thoát tài khoản này không?
            </Text>
            <View
              style={{
                width: 250,
                height: 70,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Pressable
                onPress={handleLogOutAndUpdateData}
                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: "#ffb900",
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "white",
                    alignSelf: "center",
                  }}
                >
                  Đồng ý
                </Text>
              </Pressable>
              <Pressable
                onPress={toggleModal}
                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: "#ffb900",
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "white",
                    alignSelf: "center",
                  }}
                >
                  Hủy bỏ
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal isVisible={isDeleteVisible}>
          <View
            style={{
              borderRadius: 10,
              width: 350,
              height: 240,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginTop: 40,
                fontSize: 25,
                fontWeight: 600,
                alignSelf: "center",
                justifyContent: "center",
                color: "#ffb900",
              }}
            >
              Xóa tài khoản
            </Text>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Vui lòng nhập XAC NHAN để xóa tài khoản của bạn.
            </Text>
            <TextInput
              onChangeText={(text) => setDeleteAccount(text)}
              placeholder="Vui lòng nhập.."
              style={{
                marginTop: 10,
                width: 300,
                height: 50,
                outline: "none",
                borderBottomWidth: 1,
                alignSelf: "center",
                fontSize: 20,
                fontWeight: 600,
                color: "#717171",
              }}
            ></TextInput>
            <View
              style={{
                width: 250,
                height: 70,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Pressable
                onPress={handleDeleteAccount}
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: "red",
                  borderRadius: 7,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "white",
                    alignSelf: "center",
                  }}
                >
                  XÓA
                </Text>
              </Pressable>
              <Pressable
                onPress={toggleDeleteAccount}
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: "#ffb900",
                  borderRadius: 7,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "white",
                    alignSelf: "center",
                  }}
                >
                  HỦY BỎ
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  textOpaci: {
    fontSize: 18,
    fontWeight: 600,
  },
  icon: {
    width: 34,
    height: 34,
  },
  borderLine: {
    marginTop: 15,
    borderBottomWidth: 1, // Độ rộng của border dưới
    borderBottomColor: "black", // Màu sắc của border dưới
    width: "320px", // Chiều rộng của đường dưới, có thể điều chỉnh theo nhu cầu
    alignSelf: "center", // Canh chỉnh theo trung tâm
  },
  opaci: {
    width: 380,
    height: 70,
  },
});

export default Personal;
