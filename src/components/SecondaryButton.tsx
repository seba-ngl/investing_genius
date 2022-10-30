import "./secondaryButton.style.scss";

type IProps = {
  innerText: string;
};

const SecondaryButton = ({ innerText }: IProps) => {
  return (
    <button type="button" tabIndex={0} className="secondary-button">
      {innerText}
    </button>
  );
};

export default SecondaryButton;
