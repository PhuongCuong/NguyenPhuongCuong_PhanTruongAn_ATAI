import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import Icon from "react-native-vector-icons/Entypo"
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from 'react-redux';
import { uploadcart } from '../redux/cartSlice'
import { useEffect } from 'react';
import _ from 'lodash';

const Itemcart = (props) => {
    const { item } = props;

    const cartReducer = useSelector((state) => state.cartinfo);
    const { cart } = cartReducer;

    const userReducer = useSelector((state) => state.uploaduserinfo);
    var { user } = userReducer;

    const dispath = useDispatch()

    const handlepuls = (items) => {
        let updatecart = cart.map((item) => item.id === items.id && item.portfolio === items.portfolio ?
            { ...item, quantity: item.quantity + 1 } : item
        )
        dispath(uploadcart(updatecart))
    }

    const handleminus = (items) => {
        let updatecart = cart.map((item) => item.id === items.id && item.portfolio === items.portfolio ?
            { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item
        )
        dispath(uploadcart(updatecart))
    }

    const handleDelete = (items) => {
        let updatecart = cart.filter((item) => !(item.id === items.id && item.portfolio === items.portfolio))
        if (updatecart.length === 0) {
            updatecart = [];
        }
        dispath(uploadcart(updatecart))
    }

    useEffect(() => {
        if (user && !_.isEmpty(user)) {
            const cartData = cart?.length > 0 ? cart : [];
            fetch(`https://65434e0301b5e279de202812.mockapi.io/User/${user?.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: user.email,
                    password: user.password,
                    fullname: user.fullname,
                    cart: cartData,
                    phone: user.phone,
                    discount: user.discount,
                    id: user.id
                }),
            })
        }

    }, [cart])

    return (
        <View style={{ flex: 9, height: 350, borderWidth: 1, backgroundColor: "#FFFFFF", flexDirection: "row" }}>
            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: 100, height: 100 }}>
                    <Image style={{
                        flex: 1,
                        height: undefined,
                        width: undefined,
                        resizeMode: "contain",
                    }}
                        source={item.img} />
                </View>
            </View>
            <View style={{ flex: 5, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <Text style={{ color: "#000", fontFamily: "Inter", fontSize: 17, fontStyle: "normal", fontWeight: "400" }}>
                        {item.name}
                    </Text>
                </View>
                <View style={{ justifyContent: "space-around", alignItems: "center", marginTop: 5 }}>
                    <Text style={{
                        color: "#000", fontFamily: "Inter", fontSize: 17, fontStyle: "normal", fontWeight: "700", marginBottom: 5
                    }}>
                        {item.price}
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Pressable onPress={() => handlepuls(item)}>
                            <Icon style={{ color: "#00BA5F" }} size={25} name='circle-with-plus' />
                        </Pressable>
                        <TextInput style={{
                            outlineStyle: "none", width: 20, height: 27, color: "#000", textAlign: "center",
                            fontFamily: 'Inter', fontSize: 20, fontStyle: "normal", fontWeight: "400"
                        }} editable={false} value={item.quantity} />
                        <Pressable onPress={() => handleminus(item)}>
                            <Icon style={{ color: "#00BA5F" }} size={25} name='circle-with-minus' />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Pressable onPress={() => handleDelete(item)}>
                    <Icons size={25} name='delete' />
                </Pressable>
            </View>
        </View>
    );
};

export default Itemcart;