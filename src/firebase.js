import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC224gW1cmln5dWYH-1tjzyvomSuS3uSsw",
    authDomain: "app-small.firebaseapp.com",
    projectId: "app-small",
    storageBucket: "app-small.appspot.com",
    messagingSenderId: "325068515844",
    appId: "1:325068515844:web:94f2dcf0d7a0b44641a351"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}