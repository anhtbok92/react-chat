import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAs2yUQUItNSAKuWweQXQ7ZucA0XS17zeg",
    authDomain: "reacttest-a9d90.firebaseapp.com",
    databaseURL: "https://reacttest-a9d90.firebaseio.com",
    projectId: "reacttest-a9d90",
    storageBucket: "reacttest-a9d90.appspot.com",
    messagingSenderId: "101917541257",
    appId: "1:101917541257:web:b68b96ada3a2b79aead758"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;