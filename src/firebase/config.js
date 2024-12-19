// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDq-LXfA4HbPlotp4WClEFxehXvvO1ZS6w",
  authDomain: "bookai-7b2f6.firebaseapp.com",
  projectId: "bookai-7b2f6",
  storageBucket: "bookai-7b2f6.firebasestorage.app",
  messagingSenderId: "117694337862",
  appId: "1:117694337862:web:d899b0662a1439eadb0b47",
  measurementId: "G-352WPV449H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
