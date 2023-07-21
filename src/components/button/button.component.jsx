import "./button.styles.scss";

const buttonTypesClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, type, onClick }) => {
  const handleClick = (event) => {
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
