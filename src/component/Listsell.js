import React from 'react';
import { Image, Text, View } from 'react-native';

const Listsell = (props) => {
    const { item } = props;
    return (
        <View style={{
            height: 220, width: 160, borderRadius: 10,
            overflow: "hidden", shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 1
            },
        }}>
            <View style={{ height: 20, backgroundColor: "#FFF" }}>
            </View>
            <View style={{ height: 130, borderBottomWidth: 1, borderBottomColor: "#FFB900" }}>
                <Image style={{ flex: 1, height: undefined, width: undefined, resizeMode: "contain" }} source={item.img} />
            </View>
            <View style={{ justifyContent: "space-between" }}>
                <Text style={{
                    marginLeft: 10, marginTop: 5, marginBottom: 5,
                    fontFamily: "Inter", fontSize: 17, fontWeight: "700",
                    fontStyle: "normal", color: "#000"
                }}>
                    {item.name}
                </Text>
                <Text style={{
                    marginLeft: 10, marginBottom: 15,
                    fontFamily: "Inter", fontSize: 17, fontWeight: "700",
                    fontStyle: "normal", color: "#E81725",
                }}>{item.price}</Text>
            </View>

        </View>
    );
};

export default Listsell;