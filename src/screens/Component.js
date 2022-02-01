import React from 'react';

import { Text, StyleSheet, View } from 'react-native';


const myComponent = () => {
   var name= "Esteban";
   
   return (
      <View>
         <Text style={styles.textMain}>
            Getting started with React Native!
         </Text>
         <Text style={styles.textName}>
            My name is {name}
         </Text>
      </View>)
}

const styles = StyleSheet.create({
   textMain: {
      fontSize: 45,
   },
   textName: {
      fontSize: 20,
   }
})

export default myComponent; 