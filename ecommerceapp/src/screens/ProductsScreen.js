import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import { useDispatch } from 'react-redux'
import { PRODUCTS } from '../constants'
import { addToCart } from '../redux/cartReducers'
import { LogOut } from '../redux/loginReducers'

export default function ProductsScreen({ navigation }) {


    const dispatch = useDispatch()


    const onAddItem = async (item) => {
        await dispatch(addToCart(item))
        ToastAndroid.show("item added successfully", ToastAndroid.SHORT)

    }
    const onLogout = async () => {
        await dispatch(LogOut())
        navigation.navigate('Login')
        ToastAndroid.show("Logged out successfully", ToastAndroid.SHORT)
    }
    const _renderItem = ({ item }) => (
        <View style={{ margin: 10, marginTop: 20 }}>
            <Text>{item['title']}</Text>
            <Text>{item['price']}</Text>
            <TouchableOpacity onPress={() => { onAddItem(item) }} style={{ width: 100, height: 20, backgroundColor: '#4a4acf' }} >
                <Text style={{ textAlign: 'center', color: '#ffffff' }}>Add</Text>
            </TouchableOpacity>
        </View>
    )


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', marginTop: 40, fontSize: 20 }}>PRODUCTS</Text>
            <FlatList
                data={PRODUCTS}
                renderItem={_renderItem}
                keyExtractor={(item) => item.title}
                extraData={PRODUCTS}
                style={{ height: '80%' }}
            />
            <TouchableOpacity onPress={() => { navigation.navigate('Cart') }} style={{ width: 100, height: 20, backgroundColor: '#4a4acf', marginBottom: 10, marginTop: 10, alignSelf: 'center' }} >
                <Text style={{ textAlign: 'center', color: '#ffffff' }}>go to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onLogout() }} style={{ width: 100, height: 20, backgroundColor: '#4a4acf', marginBottom: 100, alignSelf: 'center' }} >
                <Text style={{ textAlign: 'center', color: '#ffffff' }}>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}
