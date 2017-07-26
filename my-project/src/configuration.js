import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDkp-iHCzS6eoVUUvlTQRttShaTWAlcvSA",
    authDomain: "angularlyon.firebaseapp.com",
    databaseURL: "https://angularlyon.firebaseio.com",
    projectId: "angularlyon",
    storageBucket: "angularlyon.appspot.com",
    messagingSenderId: "385773860419"
};
firebase.initializeApp(config);

export default {
    database: firebase.database()
}