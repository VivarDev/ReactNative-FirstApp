import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const BigSeparator = () => (
  <View style={styles.bigSeparator} />
);
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        BIENVENIDO
      </Text>
      <BigSeparator />
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Ir a componente"
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('List')}
        title='Ir a lista'
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('Image')}
        title='Ir a imagenes'
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Ir a contador'
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Ir a colores'
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('ColorMeter')}
        title='Ir a Colores Mod'
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('ColorSquare')}
        title='Ir a Colores Cuadro'
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('ColorSquareReducer')}
        title='Ir a Colores Cuadro con Reducer'
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('NameScreen')}
        title='Ir a Input Text'
      />

    </View>)
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 2
  },
  bigSeparator: {
    marginVertical: 8
  },
});

export default HomeScreen;
