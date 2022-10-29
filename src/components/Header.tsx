import Logo from "../assets/Logo";
import IconLink from "../utils/IconLink";
import "./header.style.scss";
import MainButton from "./MainButton";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header className="header">
      <div className="inner-header">
        <IconLink link="/" icon={<Logo />} labelledby="logo" />
        <Searchbar />
        <IconLink link="/signup">
          <MainButton role="link" innerText="Log in/Sign up" />
        </IconLink>
      </div>
    </header>
  );
};

export default Header;
