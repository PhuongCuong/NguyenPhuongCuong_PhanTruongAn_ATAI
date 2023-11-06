import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

const Descriptionproduct = (props) => {
  const { route, navigation } = props;
  var itemSelected = route.params.item;
  console.log(itemSelected);
  return <View></View>;
};

export default Descriptionproduct;
