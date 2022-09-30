import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQTi2OCEWjuMb8MNHHtalAZ5H9eUrlJh8",
  authDomain: "employees-management-73e11.firebaseapp.com",
  projectId: "employees-management-73e11",
  databaseURL: "https://employee-management-2ec08-default-rtdb.firebaseio.com/",
  storageBucket: "employees-management-73e11.appspot.com",
  messagingSenderId: "97562850644",
  appId: "1:97562850644:web:57182f50319a58d03d04c1",
  measurementId: "G-SD5YDV3BN9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();


export { database };
