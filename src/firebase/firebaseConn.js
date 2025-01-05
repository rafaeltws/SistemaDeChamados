import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJFFahnjqVtJsR7rTdRzQHafRXnmlcHWI",
    authDomain: "sistemadechamados-4aa34.firebaseapp.com",
    projectId: "sistemadechamados-4aa34",
    storageBucket: "sistemadechamados-4aa34.firebasestorage.app",
    messagingSenderId: "520426278948",
    appId: "1:520426278948:web:40d8602c15947ee816c8b1",
    measurementId: "G-JRGLZJ847S"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };