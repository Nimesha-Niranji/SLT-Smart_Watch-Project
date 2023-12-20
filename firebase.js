import * as firebase from 'firebase/compat'
import 'firebase/auth'
import 'firebase/firestore'
import '@react-native-firebase/firestore'
import '@react-native-firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD4w-28B8IUPVGz67gV-ZfRzQso4L88oCk",
    authDomain: "new2-94753.firebaseapp.com",
    databaseURL: "https://new2-94753-default-rtdb.firebaseio.com",
    projectId: "new2-94753",
    storageBucket: "new2-94753.appspot.com",
    messagingSenderId: "870732000973",
    appId: "1:870732000973:web:26537c655b90d747b94384",
    measurementId: "G-EJBMW2GZF4"
};

let app;

if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};