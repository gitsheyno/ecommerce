import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
