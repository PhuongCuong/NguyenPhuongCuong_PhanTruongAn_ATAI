import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/component/Login";
import { NavigationContainer } from "@react-navigation/native";
import TabButton from "./src/tabbutton/TabButton";
import Personal from "./src/component/Personal";
import Registration from "./src/component/Registration";
import InformationUser from "./src/component/InformationUser";
import UpdatePassword from "./src/component/UpdatePassword";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="login">
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
=======
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={Login} options={{
          headerStyle: {
            backgroundColor: "#FFB900"
          },
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontFamily: "Inter",
            fontSize: 25,
            fontStyle: "normal",
            fontWeight: "700",
          },
          title: "Đăng nhập"

        }} />
        <Stack.Screen name='home' component={TabButton} options={{ headerShown: false }} />
        <Stack.Screen name='Đăng ký tài khoản' component={Registration} options={{
          headerTitleAlign: 'center',
          //  headerShown:false

        }} />
>>>>>>> 93bf75af4b7f1e98ed2a74baf317c1cb1a06f23c
      </Stack.Navigator>
    </NavigationContainer>
    // <UpdatePassword/>
  );
}
