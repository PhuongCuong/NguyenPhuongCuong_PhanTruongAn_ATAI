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
const Bell = ({ navigation }) => {
  const discountCodes = [
    {
      image: require("../../assets/img/icon/email.png"),
      name: "ATAI10",
      discountPercentage: "10%",
      details: "Details for Discount",
    },
    {
      image: require("../../assets/img/icon/email.png"),
      name: "ATAI20",
      discountPercentage: "20%",
      details: "Details for Discount",
    },
    {
      image: require("../../assets/img/icon/email.png"),
      name: "ATAI15",
      discountPercentage: "15%",
      details: "Details for Discount",
    },
    {
      image: require("../../assets/img/icon/email.png"),
      name: "ATAI25",
      discountPercentage: "25%",
      details: "Details for Discount",
    },
    {
      image: require("../../assets/img/icon/email.png"),
      name: "ATAI30",
      discountPercentage: "30%",
      details: "Details for Discount",
    },
  ];
  const handlePress = (item) => {
    navigation.navigate("Thông tin giảm giá", { item });
  };

  return (
    <React.Fragment>
      {discountCodes.map((item, index) => (
        <TouchableOpacity
          style={styles.discountObject}
          key={index}
          onPress={() => handlePress(item)}
        >
          <View style={styles.column}>
            <Image style={styles.image} source={item.image} />
          </View>
          <View style={styles.column}>
            <Text style={styles.name}>{item.name}</Text>
            <Text
              style={styles.discountPercentage}
            >{`Discount: ${item.discountPercentage}`}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.details}>{item.details}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  name: {
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
export default Bell;
