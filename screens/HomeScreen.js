import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView , StatusBar } from "react-native";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";
import firebase from "firebase";

const HomeScreen = ({ navigation }) => {
  const [Posts, setPosts] = useState(null);
  useEffect(() =>   {
    firebase
      .firestore()
      .collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map(post => ({ id: post.id, ...post.data() })))
        console.log(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle='light-content' animated={false}/>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {Posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} navigation={navigation} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
