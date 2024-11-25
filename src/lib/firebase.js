// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDdMJqiD8Szubx23AAyejh-D_7PQWKzBw",
  authDomain: "notetaking-ffb74.firebaseapp.com",
  projectId: "notetaking-ffb74",
  storageBucket: "notetaking-ffb74.firebasestorage.app",
  messagingSenderId: "414301342343",
  appId: "1:414301342343:web:2ea207a36d62fab8f2c622"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)