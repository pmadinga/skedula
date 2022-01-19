// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQGKjKeXbl6GTZf3-S_LYucxY6YuusPVU",
  authDomain: "skedula-3e119.firebaseapp.com",
  projectId: "skedula-3e119",
  storageBucket: "skedula-3e119.appspot.com",
  messagingSenderId: "1083861519386",
  appId: "1:1083861519386:web:5abe6aee892561048255a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;