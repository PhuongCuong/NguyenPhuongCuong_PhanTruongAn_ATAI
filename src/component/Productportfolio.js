import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Listsell from "./Listsell";

const Productportfolio = (props) => {
  const { navigation, route } = props;
  const { listproduct } = route.params;

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
        <View
          style={{
            height: 50,
            justifyContent: "center",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: 18,
              fontWeight: "700",
              fontStyle: "normal",
              color: "#000000",
              marginLeft: 10,
            }}
          >
            Danh mục
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
            marginLeft: 30,
          }}
        >
          {listproduct &&
            listproduct.map((item, index) => {
              return <Listsell key={index} item={item} navigation={navigation} />;
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Productportfolio;
