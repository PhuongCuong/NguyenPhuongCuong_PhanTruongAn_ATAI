import React, { useState, useEffect } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { uploaduser } from "../redux/userSlice";
const ProductDetails = (props) => {
  const { navigation, route } = props;
  var [item, setItem] = useState(route.params.item);
  useEffect(() => {
    setItem(route.params.item);
  }, [route.params]);
  console.log(item);
  return <View></View>;
};
export default ProductDetails;
