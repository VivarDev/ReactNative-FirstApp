import React, { useState } from 'react';

import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [Color, setColor] = useState([]);
    return (
        <View>
            <Button
                title='Limpiar Colores'
                onPress={() => { setColor([]) }}
            />
            <Button
                title='Agregar Color'
                onPress={() => { setColor([...Color, randomColor()]) }}
            />

            <FlatList
                keyExtractor={item => item}
                data={Color}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                height: 50,
                                width: 100 + '%',
                                backgroundColor: item
                            }}
                        />)
                }}
            />
        </View>
    )
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);

    const green = Math.floor(Math.random() * 256);

    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}
export default ColorScreen;