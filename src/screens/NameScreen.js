import React, { useState } from 'react';

import { Text, StyleSheet, View, TextInput } from 'react-native';


const NameScreen = () => {
   const [name, setName] = useState('');
   return (
      <View>
         <Text style={styles.text}>
            Ingresa una clave:
         </Text>
         <TextInput
            autoCapitalize='words'
            onChangeText={(e) => { setName(e) }}
            style={styles.input}
            value={name}
         />
         {name.length < 5
            ? <Text style={styles.text}>La clave debe tener al menos 5 caracteres</Text>
            : null
         }
      </View>
   )
}

const styles = StyleSheet.create({
   text: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold'
   },
   input: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      borderColor: 'black',
      height: 50,
      borderWidth: 5,
   },
})

export default NameScreen;  