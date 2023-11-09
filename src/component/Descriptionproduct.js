import React from "react";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { uploadcart } from '../redux/cartSlice';




const Descriptionproduct = (props) => {
  var route = useRoute();
  const dispatch = useDispatch();
  const { navigation } = props;
  const [quantity, setQuantity] = useState(0);
  var itemSelected = route.params.item;
  const userReducer = useSelector((state) => state.uploaduserinfo);
  var { user } = userReducer;

  const cartReducer = useSelector((state) => state.cartinfo);
  const { cart } = cartReducer;


  const handleAddCart = () => {
    if (user && !_.isEmpty(user)) {
      let objIndex = cart.filter((obj => obj.id === itemSelected.id && obj.portfolio === itemSelected.portfolio));
      if (objIndex && objIndex.length > 0) {
        let copycart = cart.map(obj => obj.id === itemSelected.id && obj.portfolio === itemSelected.portfolio
          ? { ...obj, quantity: obj.quantity + quantity } : obj);
        dispatch(uploadcart(copycart))
      }
      else {
        let productdata = { ...itemSelected };
        productdata.quantity = quantity;
        dispatch(uploadcart([...cart, productdata]))
      }
    } else {
      navigation.navigate("login")
    }
  }


  useEffect(() => {
    if (user && !_.isEmpty(user)) {
      fetch(`https://65434e0301b5e279de202812.mockapi.io/User/${user?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          fullname: user.fullname,
          cart: cart?.length > 0 ? cart : [],
          phone: user.phone,
          discount: user.discount,
          id: user.id
        }),
      })
    }
  }, [cart])


  return (
    <View
      style={{ flex: 2, backgroundColor: "white", flexDirection: "column" }}
    >
      <ScrollView style={{ flex: 1, alignSelf: "flex-start" }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              flex: 1,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={itemSelected.img}
              style={{ width: 390, height: 250, alignSelf: "center" }}
            ></Image>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                marginLeft: 20,
                width: 80,
                height: 80,
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={itemSelected.img}
                style={{ width: 78, height: 50, alignSelf: "center" }}
              ></Image>
            </View>
            <View>
              <Text style={styles.text}>{itemSelected.name}</Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: 500,
                  color: "red",
                }}
              >
                {itemSelected.price}
              </Text>
              <Text style={styles.text}>Mô tả</Text>
              <Text style={{ fontSize: 18, fontWeight: 400, marginLeft: 10 }}>
                {itemSelected.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: 390,
          height: 70,
          backgroundColor: "#FFB900",
          alignItems: "center",
          justifyContent: "space-evenly",
          alignSelf: "flex-end",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 170,
            height: 50,
            backgroundColor: "white",
            borderRadius: 5,
            justifyContent: "center",
          }}
        >
          <TextInput
            onChangeText={(text) => {
              const number = parseInt(text);
              setQuantity(number);
            }}
            placeholder="Nhập số lượng"
            keyboardType="numeric"
            style={{
              alignSelf: "center",
              color: "gray",
              textAlign: "center",
              fontSize: 15,
              fontWeight: 400,
              outlineStyle: "none",
            }
            }

          />
        </View>
        <TouchableOpacity
          onPress={() => handleAddCart()}
          style={{
            backgroundColor: "#e68534",
            alignSelf: "center",
            width: 120,
            height: 50,
            borderRadius: 5,
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: 600,
              alignSelf: "center",
              color: "white",
            }}
          >
            MUA NGAY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 10,
    marginTop: 5,
  },
});
export default Descriptionproduct;
