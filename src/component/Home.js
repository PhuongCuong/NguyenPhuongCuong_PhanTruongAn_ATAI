import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';
import Itemproduct from './Itemproduct';
import Listsell from './Listsell';

const listImg = [
    { img: require("../../assets/img/banner/Rectangle 5.png") },
    { img: require("../../assets/img/banner/banner2.jpg") },

]

const listItem = [
    { id: 1, name: "CƠM VĂN PHÒNG", img: require("../../assets/img/product/Rectangle 13.png") },
    { id: 2, name: "BÚN THỊT NƯỚNG", img: require("../../assets/img/product/Rectangle 14.png") },
    { id: 3, name: "BÁNH HỎI", img: require("../../assets/img/product/Rectangle 15.png") },
    { id: 4, name: "MÓN THÊM", img: require("../../assets/img/product/Rectangle 16.png") },
    { id: 5, name: "NƯỚC GIẢI KHÁT", img: require("../../assets/img/product/Rectangle 17.png") },
]

const listsell = [
    { id: 1, name: "Bánh gỏi thập cẩm", img: require("../../assets/img/product/Rectangle 13.png"), price: "35.000đ" },
    { id: 2, name: "Bún thập cẩm", img: require("../../assets/img/product/Rectangle 14.png"), price: "35.000đ" },
    { id: 3, name: "Cơm đùi gà nướng", img: require("../../assets/img/product/Rectangle 15.png"), price: "30.000đ" },
    { id: 4, name: "Cơm ba rọi nướng", img: require("../../assets/img/product/Rectangle 16.png"), price: "40.000đ" },
]

const Home = () => {
    return (
        <ScrollView>

            <View style={{ flex: 1, backgroundColor: "#FFF" }}>
                <View style={{ width: "100vh", height: 15, backgroundColor: "#F2F2F2" }}>
                </View>
                <View style={{ width: "100%" }}>
                    <SimpleCarousel
                        data={listImg}
                        renderItem={(props, i, width) => {
                            return (
                                <Banner source={props.img} width={width} />
                            );
                        }}
                    />
                </View>
                <View style={{
                    width: "100%", height: 250,
                    backgroundColor: "#F2F2F2"

                }}>
                    <Text style={{
                        marginLeft: 10, marginTop: 5, marginBottom: 15,
                        fontFamily: "Inter", fontSize: 17, fontWeight: "700",
                        fontStyle: "normal", color: "#000"
                    }}>Danh mục</Text>

                    <View style={{
                        marginLeft: 10, marginRight: 10, flexDirection: "row", gap: 20,
                        flexWrap: "wrap", overflow: "hidden"
                    }}>
                        {
                            listItem.map((item, index) => {
                                return (
                                    <Itemproduct key={index}
                                        item={item}
                                    />

                                )
                            })
                        }
                    </View>
                </View>


                <View style={{
                    width: "100%", height: 250,
                    backgroundColor: "#F2F2F2",
                    marginTop: 10

                }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{
                            marginLeft: 10, marginTop: 5, marginBottom: 15,
                            fontFamily: "Inter", fontSize: 17, fontWeight: "700",
                            fontStyle: "normal", color: "#000"
                        }}>Sản phẩm bán chạy</Text>
                        <Text style={{
                            marginLeft: "auto",
                            marginRight: 10, marginTop: 5, marginBottom: 15,
                            fontFamily: "Inter", fontSize: 17, fontWeight: "700",
                            fontStyle: "normal", color: "#FFB900"
                        }}>
                            Xem thêm
                        </Text>
                    </View>


                    <View style={{
                        marginLeft: 10, marginRight: 10, flexDirection: "row", gap: 20,
                        flexWrap: "wrap", justifyContent: "center"
                    }}>
                        {listsell.map((item, index) => {
                            return (
                                <Listsell key={index}
                                    item={item}
                                />

                            )
                        })}

                    </View>
                </View>

            </View >
        </ScrollView>

    );
};

export default Home;