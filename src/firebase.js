import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqngPkEqaq_KWsn_ImOZ0WsGoesAD5XyY",
  authDomain: "new-chat-7664b.firebaseapp.com",
  projectId: "new-chat-7664b",
  storageBucket: "new-chat-7664b.appspot.com",
  messagingSenderId: "1023052344343",
  appId: "1:1023052344343:web:26748ab347c81d708c4052"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


