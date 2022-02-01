import React from 'react'
import { View, Text, StyleSheet, Image  } from 'react-native'

const ImageDetail = ({ title, image, score}) => {

    return (
        <View>
            <Text>{title}</Text>
            <Image
                style={{ width: '50%', height: '50%' }}
                source={{ uri: image }}
            />

            <Text>Image Score: {score}</Text>
        </View>
    )
}

export default ImageDetail;

