// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcGs-mlALATQnuXANGgTP5OjgMjRObzbo",
  authDomain: "echo-10c66.firebaseapp.com",
  databaseURL: "https://echo-10c66-default-rtdb.firebaseio.com",
  projectId: "echo-10c66",
  storageBucket: "echo-10c66.appspot.com",
  messagingSenderId: "945346380213",
  appId: "1:945346380213:web:66ebb02aa48f4315bf99fc",
  measurementId: "G-KSMRLSMC3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);

// Create a storage reference from our storage service
export const storageRef = ref(storage);
