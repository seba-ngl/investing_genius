import "./mainButton.scss";

type IProps = {
  innerText: string;
};

const MainButton = ({ innerText }: IProps) => {
  return <button className="main-button">{innerText}</button>;
};

export default MainButton;
