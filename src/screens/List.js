import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Amigo 1', age:20 },
        { name: 'Amigo 2', age:45},
        { name: 'Amigo 3', age:32 },
        { name: 'Amigo 4', age:27 },
        { name: 'Amigo 5', age:53 },
        { name: 'Amigo 6', age:30 },
    ]
    return (
        <View>
            <FlatList
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={(element) => {
                    return <Text style={styles.primaryText}>{element.item.name} - Edad: {element.item.age}</Text>
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    primaryText: {
        fontSize: 30,
        marginVertical: 50,
        marginHorizontal: 50,
    }
})

export default ListScreen;