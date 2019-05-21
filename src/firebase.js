import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/auth';  // If using Firebase storage

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBUW0Y2ZjXT7iaBIg3Ejw0uauyv17IeNaQ",
    authDomain: "too-todo.firebaseapp.com",
    databaseURL: "https://too-todo.firebaseio.com",
    projectId: "TaskZ",
    storageBucket: "",
    messagingSenderId: "641723142103"
};

firebase.initializeApp(config);


// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

export default firebase;

export const database = firebase.database()
export const auth = firebase.auth()