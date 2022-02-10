// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7kw0S6Di7uLaQmeFUjm404BTWkPtMXLA",
  authDomain: "practisefirecommerce.firebaseapp.com",
  projectId: "practisefirecommerce",
  storageBucket: "practisefirecommerce.appspot.com",
  messagingSenderId: "717627192365",
  appId: "1:717627192365:web:69625248d7f1ab614574a4",
  measurementId: "G-JGGCH3NDHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB = getFirestore(app)
export default fireDB