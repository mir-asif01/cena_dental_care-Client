// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWvNRWrT2qLwv_u2Q6YhTcCLfgYI8BRNE",
  authDomain: "cena-dental-care.firebaseapp.com",
  projectId: "cena-dental-care",
  storageBucket: "cena-dental-care.appspot.com",
  messagingSenderId: "561721900461",
  appId: "1:561721900461:web:678699ad04b1a1a99ef524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app