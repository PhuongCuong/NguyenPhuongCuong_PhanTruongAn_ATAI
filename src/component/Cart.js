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
const Cart = () => {
  return (
    <React.Fragment>
      <View style={styles.footer}>
        <Text
          style={{
            marginTop: 15,
            alignSelf: "flex-start",
            fontSize: 20,
            marginLeft: 20,
            fontWeight: 600,
            justifyContent: "center",
          }}
        >
          Tạm tính
        </Text>
        <Text
          style={{
            marginTop: -28,
            marginRight: 30,
            alignSelf: "flex-end",
            fontSize: 20,
            fontWeight: 600,
            justifyContent: "center",
          }}
        >
          0 vnđ
        </Text>
        <TouchableOpacity style={styles.btnThanhToan}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              alignSelf: "center",
              color: "white",
            }}
          >
            THANH TOÁN
          </Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  footer: {
    top: 428,
    alignSelf: "center",
    width: "100%",
    height: 120,
    alignItems: "center",
    shadowColor: "gray",
    borderTopWidth: "0.2px",
    borderColor: "gray",
    shadowOffset: { width: 2, height: 2, height: 2 },
    shadowRadius: 3,
    elevation: 5,
  },
  btnThanhToan: {
    width: 300,
    height: 40,
    backgroundColor: "#FFB900",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 5,
  },
});

export default Cart;
