import {
  signInWithGooglePopup,
  creatUseDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import Button from "../../components/button/button.component";
import SignUpForm from "../../sing-up/sing-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefrence = await creatUseDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Log in with google account
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
