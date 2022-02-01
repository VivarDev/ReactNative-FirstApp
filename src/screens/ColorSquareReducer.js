import React, { useReducer } from 'react';
import ColorCounter from '../components/ColorCounter';
import { View, StyleSheet, Button, Text } from 'react-native';
const INCREMENT = 15;
const ColorSquare = () => {

    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'change_red':
                return state.red + action.payload > 255 || state.red + action.payload < 0
                    ? state
                    : { ...state, red: state.red + action.payload };
            case 'change_green':
                return state.green + action.payload > 255 || state.green + action.payload < 0
                    ? state
                    : { ...state, green: state.green + action.payload };
            case 'change_blue':
                return state.blue + action.payload > 255 || state.blue + action.payload < 0
                    ? state
                    : { ...state, blue: state.blue + action.payload };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state
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
            <Text style={styles.title}>
                CON REDUCER
            </Text>
            <ColorCounter
                color="Rojo"
                onIncrease={() => dispatch({ type: 'change_red', payload: INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -INCREMENT })}
                s
            />
            <ColorCounter
                color="Verde"
                onIncrease={() => dispatch({ type: 'change_green', payload: INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -INCREMENT })}
            />
            <ColorCounter
                color="Azul"
                onIncrease={() => dispatch({ type: 'change_blue', payload: INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -INCREMENT })}
            />
            <View
                style={{
                    height: 35+'%',
                    width: 100 + '%',
                    justifyContent: 'center',
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            >
                <Text style={styles.headline}>
                    rgb({red},{green},{blue})
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    title: {
        textAlign: 'center',

        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 20
    }
})

export default ColorSquare;