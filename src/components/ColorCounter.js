import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);
const BigSeparator = () => (
    <View style={styles.bigSeparator} />
);
const ColorCounter = ({ color,onIncrease,onDecrease }) => {
    return (

            <View style={styles.container}>
                <Text style={styles.headline}>
                    {color}
                </Text>
                <Separator />
                <Button
                    title='Incrementar'
                    onPress={() => onIncrease()}
                />
                <Separator />
                <Button
                    title='Decrementar'
                    onPress={() => onDecrease()}
                />
                <BigSeparator />
            </View>
    )
}
const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 0,
    },
    separator: {
        marginVertical: 2
    },
    bigSeparator: {
        marginVertical: 8
    },
    container: {
        justifyContent: 'center',
        marginHorizontal: 50
    },

})
export default ColorCounter;