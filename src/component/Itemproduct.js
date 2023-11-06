import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { useSelector } from 'react-redux';

const Itemproduct = (props) => {

    const { item, navigation } = props;
    const productReducer = useSelector((state) => state.listproductsell)
    const { listproduct1, listproduct2, listproduct3, listproduct5 } = productReducer;

    const handleOnPress = async (item) => {
        let listproduct = [];
        if (item.id === 1) {
            listproduct = [...listproduct1]
        } else if (item.id === 2) {
            listproduct = [...listproduct2]
        } else if (item.id === 3) {
            listproduct = [...listproduct3]
        } else if (item.id === 5) {
            listproduct = [...listproduct5]
        }

        await navigation.navigate("productportfolio", { listproduct: listproduct })
    }

    return (
        <TouchableHighlight onPress={() => handleOnPress(item)}>
            <View style={{
                width: 70,
                height: 90, backgroundColor: "#FFF",
                borderRadius: 15,
                shadowColor: "#000000",
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowOffset: {
                    height: 1,
                    width: 1
                },
                overflow: "hidden"
            }}
            >
                <View style={{ width: 69, height: 54 }}>
                    <Image style={{ flex: 1, height: undefined, width: undefined, resizeMode: "contain" }} source={item.img} />
                </View>
                <Text style={{
                    width: 70, height: 25, color: "#000",
                    fontFamily: "Inter", fontSize: 12, fontWeight: "400", fontStyle: "normal", textAlign: "center", marginTop: 5
                }}>
                    {item.name}
                </Text>
            </View>
        </TouchableHighlight>
    );
};

export default Itemproduct;