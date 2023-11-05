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

const DiscountDetail = ({ navigation, item }) => {
  var route = useRoute();
  var data = route.params.item;
  return (
    <React.Fragment>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 700,
            alignSelf: "center",
            fontStyle: "normal",
          }}
        >
          {data.name}
          <br></br>
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 600,
            alignSelf: "flex-start",
            fontStyle: "normal",
            color: "gray",
            marginLeft: 10,
          }}
        >
          {`Giảm giá: ${data.discountPercent * 100}%`} - Mã {data.name}
          <br></br>
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 600,
            alignSelf: "flex-start",
            fontStyle: "normal",
            color: "gray",
            marginLeft: 10,
          }}
        >
          Giảm thêm 7.000 đồng phí ship với mỗi đơn hàng.<br></br>Không áp dụng
          cho đơn hàng tự đến lấy.<br></br>Số lượng ưu đãi có hạng.
        </Text>
      </View>
      <View style={{ flex: 2 }}></View>
      <View></View>
      <View></View>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  discountObject: {
    top: 20,
    alignSelf: "center",
    width: 380,
    height: 70,
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "black",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  discountPercentage: {
    fontSize: 18,
  },
  details: {
    fontSize: 18,
    color: "gray",
  },
});
export default DiscountDetail;
