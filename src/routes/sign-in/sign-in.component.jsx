import {
  signInWithGooglePopup,
  creatUseDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefrence = await creatUseDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Log in with google account</button>
    </div>
  );
};

export default SignIn;
