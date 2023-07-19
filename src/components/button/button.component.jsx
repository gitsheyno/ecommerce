import "./button.styles.scss";

const buttonTypesClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, type, onClick }) => {
  console.log("Button - children:", children);
  console.log("Button - type:", type);

  const handleClick = (event) => {
    console.log("Button - handleClick called");
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`button-container ${buttonTypesClasses[buttonType]}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
