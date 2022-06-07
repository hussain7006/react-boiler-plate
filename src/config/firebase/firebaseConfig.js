// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIsqvVW52QZcRNeKMiXyMrL7CZ8QPK_cQ",
  authDomain: "myreact-boiler-plate.firebaseapp.com",
  projectId: "myreact-boiler-plate",
  storageBucket: "myreact-boiler-plate.appspot.com",
  messagingSenderId: "935656405158",
  appId: "1:935656405158:web:22f954978bd2267b601c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;