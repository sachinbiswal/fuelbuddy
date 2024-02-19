// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRVCC_fqIWLlsfc_C5AefhgVmI87fmv1I",
  authDomain: "fuelbuddy-84910.firebaseapp.com",
  projectId: "fuelbuddy-84910",
  storageBucket: "fuelbuddy-84910.appspot.com",
  messagingSenderId: "783831868877",
  appId: "1:783831868877:web:26604fb6931c3ebb831084"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth(app)
const provider=new GoogleAuthProvider()

export { auth,provider }