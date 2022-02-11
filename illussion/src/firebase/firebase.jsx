import firebase from 'firebase/app';
import "@firebase/firestore";

const app = firebase.initializeApp({  
    apiKey: "AIzaSyDr7mtwWIlWKFkRqBYbuf-m1m0QAUz7U5o",
    authDomain: "coder-illussion.firebaseapp.com",
    projectId: "coder-illussion",
    storageBucket: "coder-illussion.appspot.com",
    messagingSenderId: "53057513410",
    appId: "1:53057513410:web:2665477ff06bb637d8d85b"
})

export const getFirestore = () => {
    return firebase.firestore(app)
}