import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../redux/cartReducers'

export default function CartScreen({ navigation }) {
    const { cart } = useSelector((state) => state.cart);


    const dispatch = useDispatch()


    const _renderItem = ({ item }) => (
        <View style={{ margin: 10, marginTop: 20 }}>
            <Text>title: {item['title']}</Text>
            <Text>price:{item['price']}</Text>
            <Text>quantity:{item['quantity']}</Text>
        </View>
    )
    const onPlaceOrder = () => {
        dispatch(clearCart())
        navigation.navigate('Products')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={cart}
                renderItem={_renderItem}
                keyExtractor={(item) => item.title}
                extraData={cart}
                style={{ height: '80%' }}
            />
            <TouchableOpacity onPress={() => { onPlaceOrder() }} style={{ width: 100, height: 20, backgroundColor: '#4a4acf', marginBottom: 100, alignSelf: 'center' }} >
                <Text style={{ textAlign: 'center', color: '#ffffff' }}>place order</Text>
            </TouchableOpacity>
        </View>
    )
}
