import React, { useState } from 'react';
import ColorCounter from '../components/ColorCounter';
import { View, StyleSheet, Button, Text } from 'react-native';
const INCREMENT = 15;
const ColorSquare = () => {
    const [Red, setRed] = useState(0);
    const [Green, setGreen] = useState(0);
    const [Blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'Rojo':
                Red + change > 255 || Red + change < 0
                    ? null
                    : setRed(Red + change)

            case 'Verde':
                Green + change > 255 || Green + change < 0
                    ? null
                    : setGreen(Green + change)

            case 'Azul':
                Blue + change > 255 || Blue + change < 0
                    ? null
                    : setBlue(Blue + change)
        }
    }
    return (
        <View>
            <ColorCounter
                color="Rojo"
                onIncrease={() => setColor('Rojo', INCREMENT)}
                onDecrease={() => setColor('Rojo', - INCREMENT)}

            />
            <ColorCounter
                color="Verde"
                onIncrease={() => setColor('Verde', + INCREMENT)}
                onDecrease={() => setColor('Verde', - INCREMENT)}
            />
            <ColorCounter
                color="Azul"
                onIncrease={() => setColor('Azul', + INCREMENT)}
                onDecrease={() => setColor('Azul', - INCREMENT)}
            />
            <View
                style={{
                    height: 386,
                    width: 100 + '%',
                    backgroundColor: `rgb(${Red},${Green},${Blue})`
                }}
            >
                <Text style={styles.headline}>
                    rgb({Red},{Green},{Blue})
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',

        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 150,
    },
})

export default ColorSquare;