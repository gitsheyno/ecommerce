import "./button.styles.scss";

const buttonTypesClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType }) => {
  return (
    <button className={`button-container  ${buttonTypesClasses[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
