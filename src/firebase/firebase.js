import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZTJAYBq7QYp7pheS9QgA8yQRREMQh1IA",
    authDomain: "carrito-vue-505cc.firebaseapp.com",
    projectId: "carrito-vue-505cc",
    storageBucket: "carrito-vue-505cc.firebasestorage.app",
    messagingSenderId: "366470575130",
    appId: "1:366470575130:web:31a383b8ac344ad660cda3",
    measurementId: "G-14K0PL277N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, app, firestore };
