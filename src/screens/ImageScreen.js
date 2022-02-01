import React from 'react'
import ImageDetail from '../components/ImageDetail'
import { View, Text, StyleSheet } from 'react-native'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                score='5'
                image='https://unsplash.com/photos/ESkw2ayO2As/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Zm9yZXN0fHwwfHx8fDE2NDM1NzI3NDA&force=true'
            
            />

            <ImageDetail
                title="Beach"
                score='6'
                image="https://unsplash.com/photos/KMn4VEeEPR8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8YmVhY2h8fDB8fHx8MTY0MzU3MjE3NA&force=true&w=640"
            />

        </View>
    )
}

export default ImageScreen;

