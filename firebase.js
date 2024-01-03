import * as firebase from 'firebase/compat'
import 'firebase/auth'
import 'firebase/firestore'
import '@react-native-firebase/firestore'
import '@react-native-firebase/auth'
import {getDatabase} from 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDlNP42riCPo2lvGK-W5-FqcD0mn7YxTHQ",
  authDomain: "smartwatch-752a1.firebaseapp.com",
  projectId: "smartwatch-752a1",
  storageBucket: "smartwatch-752a1.appspot.com",
  messagingSenderId: "407733372976",
  appId: "1:407733372976:web:faa23a736c4a047de805f5",
  measurementId: "G-CX17P057ZB"
};

let app;

if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const db2 = getDatabase();

export {db, auth, db2, firebase};