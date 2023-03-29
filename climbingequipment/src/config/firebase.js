// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoHyIIB6hXvy4i2Pfi72J1ECQff6dNcNI",
  authDomain: "climbing-4b2c3.firebaseapp.com",
  projectId: "climbing-4b2c3",
  storageBucket: "climbing-4b2c3.appspot.com",
  messagingSenderId: "161442327345",
  appId: "1:161442327345:web:d73a8d6898eadd4ae99e10",
  measurementId: "G-0KCKFCR1GF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
