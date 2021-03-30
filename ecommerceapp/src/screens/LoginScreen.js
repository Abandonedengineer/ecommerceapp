import React, { useState } from 'react'
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native'
import { Login } from '../redux/loginReducers';
import { useDispatch } from 'react-redux'

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleLogin = async () => {
        if (username == "" || password == "") {
            ToastAndroid.show("Please enter credentials", ToastAndroid.SHORT);
        } else if (username == 'admin' && password == "admin") {
            dispatch(Login())
            navigation.navigate('Products')
        } else {
            ToastAndroid.show("username or password is incorrect", ToastAndroid.SHORT);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <Text>Login</Text>
            <TextInput value={username} placeholder={"Enter username"} onChangeText={(text) => { setUsername(text) }} style={{ borderWidth: 1 }} />
            <TextInput value={password} placeholder={"Enter password"} onChangeText={(text) => { setPassword(text) }} secureTextEntry style={{ borderWidth: 1 }} />
            <Button
                title="Login"
                onPress={handleLogin}
            />
        </View>
    )
}
