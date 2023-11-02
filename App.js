import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/component/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabButton from './src/tabbutton/TabButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Stack.Screen name='home' component={TabButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

