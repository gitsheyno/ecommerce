import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  creatUseDocumentFromAuth,
} from "../utils/firebase/firebase.util";
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
      console.log(createDoc);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Wrong Email");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
