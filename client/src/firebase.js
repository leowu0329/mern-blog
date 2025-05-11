// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'test-19277.firebaseapp.com',
  databaseURL: 'https://test-19277-default-rtdb.firebaseio.com',
  projectId: 'test-19277',
  storageBucket: 'test-19277.appspot.com',
  messagingSenderId: '567561852471',
  appId: '1:567561852471:web:befbb80e6062fe8d1b11b2',
  measurementId: 'G-EVW9YL3G04',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
