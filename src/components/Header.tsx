import Logo from "../assets/Logo";
import IconLink from "../utils/IconLink";
import "./header.style.scss";
import MainButton from "./MainButton";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header className="header-component">
      <div className="inner-header">
        <div className="left-part">
          <IconLink link="/" icon={<Logo />} labelledby="logo" />
          <Searchbar />
        </div>
        <div className="right-part">
          <IconLink link="/signup">
            <MainButton role="link" innerText="Log in/Sign up" />
          </IconLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
