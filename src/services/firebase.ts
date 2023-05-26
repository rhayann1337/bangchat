import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/database";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_API_KEY,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAeWVaF3lNCh1oPnqP9fa3RDQjn1CkEXl8",
  authDomain: "bangchat-5cc88.firebaseapp.com",
  projectId: "bangchat-5cc88",
  storageBucket: "bangchat-5cc88.appspot.com",
  messagingSenderId: "902949219705",
  appId: "1:902949219705:web:2448b703c23c3315e893a8",
  measurementId: "G-DKYZLV24JY",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
