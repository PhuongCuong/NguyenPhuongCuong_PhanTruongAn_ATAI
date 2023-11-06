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
import { store } from "./src/redux/store";
import { Provider, useSelector } from "react-redux";
import _ from "lodash";
import Descriptionproduct from "./src/component/Descriptionproduct";
import Icon from "react-native-vector-icons/Entypo";


const Stack = createStackNavigator();

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
                // shadowOffset: {
                //   width: 0,
                //   height: 1,
                // },
                // shadowColor: "#ddd",
                // shadowOpacity: 0.8,
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
          <Stack.Screen name="descriptionproduct" component={Descriptionproduct}
            options={{
              headerTitleAlign: "center",
              headerTitle: "Chi tiết sản phẩm",
              headerStyle: {
                fontFamily: "Inter",
                fontSize: 18,
                fontStyle: "normal",
                fontWeight: "700",
              },
              headerRight: () => {
                return <Icon name="shopping-cart" size={24} />
              },
              headerRightContainerStyle: {
                marginRight: 10
              },

            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
