// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmr44QFK4ygxCd1DLBTlIamPOaGr5QghM",
  authDomain: "twitter-clone-ee0f6.firebaseapp.com",
  projectId: "twitter-clone-ee0f6",
  storageBucket: "twitter-clone-ee0f6.appspot.com",
  messagingSenderId: "266237193090",
  appId: "1:266237193090:web:9cecbac10a40195184bd9b",
  measurementId: "G-SJ574524CJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };