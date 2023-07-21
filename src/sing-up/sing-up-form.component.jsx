import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  creatUseDocumentFromAuth,
} from "../utils/firebase/firebase.util";
import FormInput from "../components/form-input/form-input.component";
import "./sing-up-form.styles.scss";
import Button from "../components/button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const createDoc = await creatUseDocumentFromAuth(user, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Wrong Email");
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
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          required
        />

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

        <FormInput
          label={"Confirm Password"}
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
