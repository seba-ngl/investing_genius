import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

type IProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
};

const ThemeButton = ({ theme, setTheme }: IProps) => {
  const handleClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button
      aria-label="theme switcher"
      className="theme-button"
      onClick={handleClick}
    >
      {theme === "dark" ? (
        <BsSunFill size={32} />
      ) : (
        <BsFillMoonFill size={32} />
      )}
    </button>
  );
};

export default ThemeButton;
