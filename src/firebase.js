import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4Hf0C_2Jpxac4J4GhrpxSX6hi01hnvaw",
    authDomain: "chatapp-slackclone.firebaseapp.com",
    projectId: "chatapp-slackclone",
    storageBucket: "chatapp-slackclone.appspot.com",
    messagingSenderId: "582575979644",
    appId: "1:582575979644:web:02d41f68efe6d61e3bddf9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
