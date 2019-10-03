import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDeK71_wdZ8_z8KpcoVq1vuYWOIzwrrGkw",
  authDomain: "crwn-db-ryusou.firebaseapp.com",
  databaseURL: "https://crwn-db-ryusou.firebaseio.com",
  projectId: "crwn-db-ryusou",
  storageBucket: "",
  messagingSenderId: "510998609843",
  appId: "1:510998609843:web:057d3163d0f9f6e95115c6",
  measurementId: "G-XBV6BX7QHW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
