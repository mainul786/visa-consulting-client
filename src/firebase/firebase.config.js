// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.VISA_APP_apiKey,
//   authDomain: process.env.VISA_APP_authDomain,
//   projectId: process.env.VISA_APP_projectId,
//   storageBucket: process.env.VISA_APP_storageBucket,
//   messagingSenderId: process.env.VISA_APP_messagingSenderId,
//   appId: process.env.VISA_APP_appId
// };

const firebaseConfig = {
    apiKey: "AIzaSyDVS-GWOrSx5gYkr-eaOxFjsFMGHV3osVQ",
    authDomain: "visa-consulting-5f6c5.firebaseapp.com",
    projectId: "visa-consulting-5f6c5",
    storageBucket: "visa-consulting-5f6c5.appspot.com",
    messagingSenderId: "150022245595",
    appId: "1:150022245595:web:7647517499e031a696d0fe"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;