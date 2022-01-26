import React from 'react'
import { View, Text, SafeAreaView, Platform} from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor : 'black', flex : 1 , marginTop : Platform.OS === 'ios' ? 0 : 30}}>
           <AddNewPost navigation={navigation} />
        </SafeAreaView>
    )
}

export default NewPostScreen
