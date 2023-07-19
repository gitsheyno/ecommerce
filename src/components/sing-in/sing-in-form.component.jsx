import { useState } from "react";
import {
  signInWithGooglePopup,
  creatUseDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import FormInput from "../../components/form-input/form-input.component";
import "./sing-in-form.styles.scss";
import Button from "../../components/button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const signInWithGoogle = async () => {
    console.log(1);
    const { user } = await signInWithGooglePopup();
    const userDocRefrence = await creatUseDocumentFromAuth(user);
  };

  const { email, password } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(2);
    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("incorect password");
      } else if (err.code === "auth/user-not-found") {
        alert("no user associated with this email");
      }
    }

    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />

        <div className="button-containers">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
