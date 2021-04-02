import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFhElUEz-l4IsOdEdJe52d9Bye6no9kn4",
    authDomain: "whatsapp-2-77cd2.firebaseapp.com",
    projectId: "whatsapp-2-77cd2",
    storageBucket: "whatsapp-2-77cd2.appspot.com",
    messagingSenderId: "998622362287",
    appId: "1:998622362287:web:101ac887358162efe6f25a"
};

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };