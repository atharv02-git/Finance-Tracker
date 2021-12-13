import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6sqxz1VprWTrqLu0V1ntK55C4YZi5bUo",
  authDomain: "myfinance-60980.firebaseapp.com",
  projectId: "myfinance-60980",
  storageBucket: "myfinance-60980.appspot.com",
  messagingSenderId: "221940410146",
  appId: "1:221940410146:web:ed31ae32f6a63f3879e77b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth()

export { projectFirestore,projectAuth };