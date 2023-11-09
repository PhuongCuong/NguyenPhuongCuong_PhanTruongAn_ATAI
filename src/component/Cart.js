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
  ScrollView,
} from "react-native";

import { useSelector } from "react-redux";
import Itemcart from "./Itemcart";


const Cart = () => {

  const cartReducer = useSelector((state) => state.cartinfo);
  const { cart } = cartReducer;

  const [totalprice, settotalprice] = useState(0)

  useEffect(() => {
    if (cart?.length > 0) {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        let priceitem = parseInt(cart[i].price.replace(/\D/g, ''), 10);
        let pricequantity = priceitem * cart[i].quantity
        total += pricequantity;
      }
      settotalprice(total);
    }
  }, [cart])


  return (
    <React.Fragment>
      <View style={{ height: 430, backgroundColor: cart?.length > 0 ? '#FFB900' : "" }}>
        <ScrollView>
          {
            cart && cart.length > 0 &&
            cart.map((item, index) => {
              return (
                <Itemcart key={index} item={item} />
              )
            })
          }
        </ScrollView>

      </View>
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
          {cart?.length > 0
            ?
            <>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalprice)}
            </>
            :
            <>
              0 vnđ
            </>
          }
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
    position: "absolute"
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
