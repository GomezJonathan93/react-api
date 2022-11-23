import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkNPk_qYNjsL9fAq506UFIjvM1TYL482M",
  authDomain: "jonathan-gomez-reactjs-34790.firebaseapp.com",
  projectId: "jonathan-gomez-reactjs-34790",
  storageBucket: "jonathan-gomez-reactjs-34790.appspot.com",
  messagingSenderId: "629857966131",
  appId: "1:629857966131:web:15a4b95550268fa26e6b46"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);