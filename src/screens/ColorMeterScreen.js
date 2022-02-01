import React, { useState } from 'react';

import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorMeterScreen = () => {

    const [Red, setRed] = useState(0);

    const [Green, setGreen] = useState(0);
    const [Blue, setBlue] = useState(0);

    const [Color, setColor] = useState([]);
    if (Red < 0) {
        return
    }
    if (Blue < 0) {
        return
    }
    if (Green < 0) {
        return
    }
    if (Red > 255) {
        return
    }
    if (Blue > 255) {
        return
    }
    if (Green > 255) {
        return
    }
    const randomColor = () => {
        setColor([...Color, `rgb(${Red},${Green},${Blue})`])
        console.log(Color);
    }
    return (
        <View>
            <Button
                title='Limpiar Colores'
                onPress={() => {
                    setColor([]);
                    setRed(0);
                    setBlue(0);
                    setGreen(0);
                }}
            />
            <Button
                title='Mas Rojo'
                color='red'
                onPress={() => { setRed(Red + 32); randomColor() }}
            />
            <Button
                title='Menos Rojo'
                color='pink'
                onPress={() => { setRed(Red - 32); randomColor() }}
            />
            <Button
                title='Mas Verde'

                color='green'
                onPress={() => { setGreen(Green + 32); randomColor() }}
            />
            <Button
                title='Menos Verde'

                color='lightgreen'
                onPress={() => { setGreen(Green - 32); randomColor() }}
            />
            <Button
                title='Mas Azul'

                color='blue'
                onPress={() => { setBlue(Blue + 32); randomColor() }}
            />
            <Button
                title='Menos Azul'

                color='lightblue'
                onPress={() => { setBlue(Blue - 32); randomColor() }}
            />

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={Color}
                renderItem={({ item }) => {
                    console.log(item);
                    return (
                        <View
                            style={{
                                height: 30,
                                width: 100 + '%',
                                backgroundColor: item
                            }}
                        />)
                }}
            />
        </View>
    )
}


export default ColorMeterScreen;