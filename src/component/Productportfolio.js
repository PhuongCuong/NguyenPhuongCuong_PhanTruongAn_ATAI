import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Listsell from './Listsell';

const Productportfolio = () => {

    const productReducer = useSelector((state) => state.listproductsell)
    const { listproductsell } = productReducer;


    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
                <View style={{ height: 50, justifyContent: "center", position: "sticky", top: 0, zIndex: 1 }}>
                    <Text style={{
                        fontFamily: "Inter", fontSize: 16,
                        fontWeight: "700", fontStyle: "normal", color: "#000000",
                        marginLeft: 10
                    }}>Danh mục</Text>
                </View>

                <View style={{
                    flexDirection: "row", flexWrap: "wrap", gap: 20,
                    alignItems: "center", marginLeft: 30

                }}>
                    {
                        listproductsell && listproductsell.map((item, index) => {
                            return (
                                <Listsell key={index}
                                    item={item}
                                />
                            )
                        })
                    }
                </View>

            </View>
        </ScrollView>
    );
};

export default Productportfolio;