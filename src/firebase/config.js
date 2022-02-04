import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTCkTaO9TlyjHCUlMcpNkwDDwKkSuhBzE",
    authDomain: "udemy-vue-firebase-sites-b720c.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-b720c",
    storageBucket: "udemy-vue-firebase-sites-b720c.appspot.com",
    messagingSenderId: "933870031859",
    appId: "1:933870031859:web:20048c1307c314ff803886"
};

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init authendication
const projectAuth = firebase.auth()
// Init firestore
const projectFirestore = firebase.firestore()
// Init ServerTimeStamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, timestamp}