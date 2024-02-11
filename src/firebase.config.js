// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6TRAEjTKwRzPTbH_hMJZZ08ZKoIIyAEQ",
  authDomain: "spit-tech-tonic.firebaseapp.com",
  projectId: "spit-tech-tonic",
  storageBucket: "spit-tech-tonic.appspot.com",
  messagingSenderId: "650667094611",
  appId: "1:650667094611:web:10849018db17dac9220ca6",
  measurementId: "G-01049MF8P6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
