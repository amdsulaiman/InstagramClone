import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SignupForm from "../components/SignupScreen/SignupForm";
import firebase from "../firebase";

const SignupScreen = ( { navigation }) => (

  <View style={styles.container}>
    <View style={styles.logo}>
      <Image
        source={{
          uri: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
        }}
        style={{height : 100 , width : 100}}
      />
    </View>
    <SignupForm navigation={navigation} />
  </View>
);
const styles = StyleSheet.create({
  container: {
      flex : 1,
      backgroundColor : 'white',
      paddingTop : 50,
      paddingHorizontal : 12

  },
  logo: {
   alignItems : 'center',
   marginTop : 60
  },
});

export default SignupScreen;
