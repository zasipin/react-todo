import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8GNkGaJWx--TyJUlNyPBL2L-5fcyMdt8",
    authDomain: "reactclass-todoapp.firebaseapp.com",
    databaseURL: "https://reactclass-todoapp.firebaseio.com",
    storageBucket: "reactclass-todoapp.appspot.com",
    messagingSenderId: "533369736188"
  };
  firebase.initializeApp(config); 
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;