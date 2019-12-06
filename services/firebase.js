import firebase from 'firebase';

export default !firebase.apps.length
  ? firebase.initializeApp({
    apiKey: "AIzaSyDumyK-9Xu5mf4zeKKeIC0P5_DNUA_kr0g",
    authDomain: "idvotes123.firebaseapp.com",
    databaseURL: "https://idvotes123.firebaseio.com",
    projectId: "idvotes123",
    storageBucket: "idvotes123.appspot.com",
    messagingSenderId: "346014050143",
    appId: "1:346014050143:web:a10937f565a479e36a38ea"
  }).database()
  : firebase.app().database();
