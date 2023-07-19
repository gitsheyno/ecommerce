import {
  signInWithGooglePopup,
  creatUseDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import "./authentication.styless.scss";
import SignUpForm from "../../sing-up/sing-up-form.component";
import SignInForm from "../../components/sing-in/sing-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
