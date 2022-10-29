import "./mainButton.style.css";

type IProps = {
  innerText?: string;
  role: "button" | "link";
};

const MainButton = ({ innerText, role }: IProps) => {
  return role === "link" ? (
    <div className="main-button">{innerText}</div>
  ) : (
    <div role={role} tabIndex={0} className="main-button">
      {innerText}
    </div>
  );
};

export default MainButton;
