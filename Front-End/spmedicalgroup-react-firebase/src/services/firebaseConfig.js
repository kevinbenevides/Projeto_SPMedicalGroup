import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDMzKp-R4J12qKt_8q9980Z3-7jCTVmjbg",
    authDomain: "spmedicalgroup-kevin.firebaseapp.com",
    databaseURL: "https://spmedicalgroup-kevin.firebaseio.com",
    projectId: "spmedicalgroup-kevin",
    storageBucket: "spmedicalgroup-kevin.appspot.com",
    messagingSenderId: "513083493897",
    appId: "1:513083493897:web:47095464b6cca581"
  };

firebase.initializeApp(config);

export default firebase;