import React from 'react';
import { Image, Text, View } from 'react-native';

const Itemproduct = (props) => {
    const { item } = props;
    return (
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
        }}>
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
    );
};

export default Itemproduct;