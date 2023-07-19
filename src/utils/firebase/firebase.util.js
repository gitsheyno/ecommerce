import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGS5EpUja2dq12sfE-d45AOfW3cKcsmAE",
  authDomain: "ecommercedb-c7781.firebaseapp.com",
  projectId: "ecommercedb-c7781",
  storageBucket: "ecommercedb-c7781.appspot.com",
  messagingSenderId: "66693543017",
  appId: "1:66693543017:web:6ba105ff30bc6e9facdef8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const creatUseDocumentFromAuth = async (
  useAuth,
  additionalInfo = {}
) => {
  if (!useAuth) return;

  const userDocRef = doc(db, "users", useAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = useAuth;
    const createdAT = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAT,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("error creating this user", err);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  console.log(email, password);
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
