

import firebase from "firebase";
require("firebase/auth");


const firebaseConfig = {



if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore()

export default firebase;

