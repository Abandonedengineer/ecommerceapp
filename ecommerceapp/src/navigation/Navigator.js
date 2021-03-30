import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'
import ProductsScreen from '../screens/ProductsScreen'
import CartScreen from '../screens/CartScreen'
import { useSelector } from 'react-redux'

export default function Navigator() {
    const { isLoggedIn } = useSelector((state) => state.login);
    console.log("isLoggedIn", isLoggedIn)

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? "Products" : "Login"}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}