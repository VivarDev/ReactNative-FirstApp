import React, { useReducer } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';


const CounterScreen = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'counter_change':
                return { ...state, counter: state.counter + action.payload }
        }
    }
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;
    return (
        <View>
            <Button
                title='Incrementar'
                onPress={() => dispatch({ type: 'counter_change', payload: 1 })} />
            <Button
                title='Decrementar'
                onPress={() => dispatch({ type: 'counter_change', payload: -1 })} />
            <Text>Contador: {counter}</Text>
        </View>
    )

}
export default CounterScreen;