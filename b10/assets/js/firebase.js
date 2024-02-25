import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjR3MbPYvb4RKNgoxyjnVUjD9o1AVNEWc",
  authDomain: "keit0603.firebaseapp.com",
  projectId: "keit0603",
  storageBucket: "keit0603.appspot.com",
  messagingSenderId: "738942343409",
  appId: "1:738942343409:web:3e1274426c3933c5f4f150",
  measurementId: "G-95FCFKE6Z9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);