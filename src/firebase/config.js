import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEbxcPYVFjDWSuKaPo3bBmN1FYZabZ-vg",
  authDomain: "costureirosconectados.firebaseapp.com",
  projectId: "costureirosconectados",
  storageBucket: "costureirosconectados.appspot.com",
  messagingSenderId: "136569818931",
  appId: "1:136569818931:web:f826f9062019e65e293846"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
