// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2NNCZSxU8t6ILmVH5f44ZNzb-nKv-_Uk",
  authDomain: "app-wines-7e1ad.firebaseapp.com",
  projectId: "app-wines-7e1ad",
  storageBucket: "app-wines-7e1ad.appspot.com",
  messagingSenderId: "362671691899",
  appId: "1:362671691899:web:e2b8cf4223fc4c67546ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//getData devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);