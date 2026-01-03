import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as fbSignOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkmupJtyH4BsCMMuhjLdp7x5UMGesGRlc",
    authDomain: "hackathon-52d5a.firebaseapp.com",
    projectId: "hackathon-52d5a",
    storageBucket: "hackathon-52d5a.firebasestorage.app",
    messagingSenderId: "105533219206",
    appId: "1:105533219206:web:c4ea6c3bda7869f5f44c07",
    measurementId: "G-XY6YY6YCN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
    return signInWithPopup(auth, provider);
}

export function signOut() {
    return fbSignOut(auth);
}

export { auth, onAuthStateChanged };
