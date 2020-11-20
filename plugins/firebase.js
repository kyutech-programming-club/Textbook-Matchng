import { firebase } from '@firebase/app'
import '@firebase/auth'
// import * as firebase from 'firebase/app'
// import 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAPtm6IIQkHt9YUtXErHA7qhS20m6TczLs",
  authDomain: "textbook-matching.firebaseapp.com",
  databaseURL: "https://textbook-matching.firebaseio.com",
  projectId: "textbook-matching",
  storageBucket: "textbook-matching.appspot.com",
  messagingSenderId: "506930397187",
  appId: "1:506930397187:web:0700dc17011e070ab14e36",
  measurementId: "G-ZR9G2W862K"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let app = null;
if(!firebase.apps.length){
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase 