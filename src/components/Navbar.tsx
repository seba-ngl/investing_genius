import Logo from "../assets/Logo";
import MainButton from "../primitives/MainButton";
import ThemeButton from "../primitives/ThemeButton";
import "./navbar.scss";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

type IProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
};

const Navbar = ({ theme, setTheme }: IProps) => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <Logo theme={theme} />
      </Link>
      <div className="right-part nav-desktop">
        <ThemeButton theme={theme} setTheme={setTheme} />
        <MainButton innerText="Get started" />
      </div>
      <button aria-label="navigation menu" className="nav-mobile">
        <BiMenu size={32} />
      </button>
    </div>
  );
};

export default Navbar;
