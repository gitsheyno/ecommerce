import {
  auth,
  signInWithGooglePopup,
  creatUseDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.util";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefrence = await creatUseDocumentFromAuth(user);
  };

  useEffect(() => {
    const func = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRefrence = await creatUseDocumentFromAuth(response.user);
      }
    };

    func();
  }, []);

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Log in with google account</button>
      <button onClick={signInWithGoogleRedirect}>
        Log in with google redirect account
      </button>
    </div>
  );
};

export default SignIn;
