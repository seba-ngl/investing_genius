import Logo from "../assets/Logo";
import IconLink from "../utils/IconLink";
import "./header.style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="inner-header">
        <IconLink link="/" icon={<Logo />} labelledby="logo" />
      </div>
    </header>
  );
};

export default Header;
