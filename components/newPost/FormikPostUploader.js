import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";
import firebase from "firebase";
import * as ImagePicker from "expo-image-picker";

const PlaceHolderImage =
  "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg";
const uploadSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is Required"),
  caption: Yup.string().max(2200, "Caption has reached the limit"),
});
const openCamera = async () => {
  
  // Ask the user for the permission to access the camera
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("You've refused to allow this appp to access your camera!");
    return;
  }

  const result = await ImagePicker.launchCameraAsync();

  // Explore the result
  console.log(result);

  if (!result.cancelled) {
    setPickedImagePath(result.uri);
    console.log(result.uri);
  }
};
const showImagePicker = async () => {

  // Ask the user for the permission to access the media library 
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("You've refused to allow this appp to access your photos!");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync();

  // Explore the result
  console.log(result);

  if (!result.cancelled) {
    setPickedImagePath(result.uri);
    console.log(result.uri);
  }
}
const ImagePickerAlert = () => 
  Alert.alert("Upload Post", "Where would you like to Select Image?", [
    {
      text: "Camera",
      onPress: () => openCamera(),
      style: "cancel",
    },
    {
      text: "Gallery",
      onPress: () => showImagePicker(),
      style: "cancel",
    },
  ]);


const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PlaceHolderImage);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);


  const getUserName = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .where("uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            image: doc.data().image,
          });
        })
      );
    return unsubscribe;
  };
  useEffect(() => {
    getUserName();
  }, []);

  const uploadPostToFire = (imageUrl, caption) => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.email)
      .collection("posts")
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.image,
        uid: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());
    return unsubscribe;
  };

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        uploadPostToFire(values.imageUrl, values.caption);
      }}
      validationSchema={uploadSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={ImagePickerAlert}>
              <Image
                source={{
               uri: validUrl.isUri(thumbnailUrl)
                   ? thumbnailUrl
                 : PlaceHolderImage,

                }}
                style={{ width: 100, height: 100, borderRadius: 8 }}
              />
            </TouchableOpacity>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 18 }}
                placeholder="Write a Caption...."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid}  color="#ff5c5c"/>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

// uri: validUrl.isUri(thumbnailUrl)
//                   ? thumbnailUrl
//                   : PlaceHolderImage,
