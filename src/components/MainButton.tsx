import "./mainButton.style.scss";

type IProps = {
  innerText?: string;
  role: "button" | "link";
};

const MainButton = ({ innerText, role }: IProps) => {
  return role === "link" ? (
    <div className="main-button-component">{innerText}</div>
  ) : (
    <div role={role} tabIndex={0} className="main-button-component">
      {innerText}
    </div>
  );
};

export default MainButton;
