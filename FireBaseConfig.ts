import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyDnejJuQhTpXo20-er28sJdkoVVJ--IxPQ",
  authDomain: "motto-app-127a3.firebaseapp.com",
  projectId: "motto-app-127a3",
  storageBucket: "motto-app-127a3.appspot.com",
  messagingSenderId: "446282516539",
  appId: "1:446282516539:web:57d6f41b9883e23ec0f41e"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP)

