import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/component/Login";
import { NavigationContainer } from "@react-navigation/native";
import TabButton from "./src/tabbutton/TabButton";
import Personal from "./src/component/Personal";
import Registration from "./src/component/Registration";
import InformationUser from "./src/component/InformationUser";
import UpdatePassword from "./src/component/UpdatePassword";
import Productportfolio from "./src/component/Productportfolio";
import DiscountDetail from "./src/component/DiscountDetail";
import Term from "./src/component/Term";
import { store } from "./src/redux/store";
import { Provider, useSelector } from "react-redux";
import _ from "lodash";
import Descriptionproduct from "./src/component/Descriptionproduct";
import Icon from "react-native-vector-icons/Entypo";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const btncart = () => {
  const cartReducer = useSelector((state) => state.cartinfo);
  const { cart } = cartReducer;

  const navigation = useNavigation();
  return (
    <Pressable
      style={{ position: "relative" }}
      onPress={() => navigation.navigate("cart")}
    >
      <Icon name="shopping-cart" size={30} />
      {cart?.length > 0 ? (
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: "50%",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -15,
            right: -9,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Inter",
              fontSize: 17,
              fontWeight: "700",
            }}
          >
            {cart.length}
          </Text>
        </View>
      ) : (
        <></>
      )}
    </Pressable>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: "#FFB900",
              },
              headerTitleAlign: "center",
              headerTintColor: "#000",
              headerTitleStyle: {
                fontFamily: "Inter",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "700",
              },
              title: "Đăng nhập",
            }}
          />
          <Stack.Screen
            name="home"
            component={TabButton}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Đăng ký tài khoản"
            component={Registration}
            options={{
              headerStyle: {
                backgroundColor: "#FFB900",
              },
              headerTitleAlign: "center",
              headerTintColor: "#000",
              headerTitleStyle: {
                fontFamily: "Inter",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "700",
              },
              title: "Đăng ký tài khoản",
            }}
          />
          <Stack.Screen
            name="Thông tin tài khoản"
            component={InformationUser}
            options={{
              headerStyle: {
                backgroundColor: "#FFB900",
              },
              headerTitleAlign: "center",
              headerTintColor: "#000",
              headerTitleStyle: {
                fontFamily: "Inter",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "700",
              },
              title: "Thông tin tài khoản",
            }}
          />
          <Stack.Screen
            name="Đổi mật khẩu"
            component={UpdatePassword}
            options={{
              headerStyle: {
                backgroundColor: "#FFB900",
              },
              headerTitleAlign: "center",
              headerTintColor: "#000",
              headerTitleStyle: {
                fontFamily: "Inter",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "700",
              },
              title: "Đổi mật khẩu",
            }}
          />
          <Stack.Screen
            name="productportfolio"
            component={Productportfolio}
            options={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#FFB900",
              },
              headerTitleStyle: {
                fontFamily: "Inter",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "700",
                color: "#000",
              },
              headerTitle: "Danh sách món",
            }}
          />
          <Stack.Screen
            name="Thông tin giảm giá"
            component={DiscountDetail}
            options={{
              headerStyle: {
                backgroundColor: "#FFB900",
              },
              headerTitleAlign: "center",
              headerTintColor: "#000",
              headerTitleStyle: {
                fontFamily: "Inter",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "700",
              },
              title: "Thông tin giảm giá",
            }}
          />
          <Stack.Screen
            name="descriptionproduct"
            component={Descriptionproduct}
            options={{
              headerTitleAlign: "center",
              headerTitle: "Chi tiết sản phẩm",
              headerStyle: {},
              headerTitleStyle: {
                color: "#FFB900",
                fontFamily: "Inter",
                fontSize: 18,
                fontWeight: "700",
              },
              headerRight: () => btncart(),
              headerRightContainerStyle: {
                marginRight: 10,
              },
            }}
          />
          <Stack.Screen
            name="Term"
            component={Term}
            options={{
              headerStyle: {
                backgroundColor: "#FFB900",
              },
              headerTitleAlign: "center",
              headerTintColor: "#000",
              headerTitleStyle: {
                fontFamily: "Inter",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "700",
              },
              title: "Điều khoản dịch vụ",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
