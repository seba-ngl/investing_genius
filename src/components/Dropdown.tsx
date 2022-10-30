import { useState } from "react";
import "./dropdown.style.scss";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-toggle"
        tabIndex={0}
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Dropdown
      </button>
      {showDropdown ? (
        <div className="dropdown-menu">
          <button type="button" tabIndex={0}>
            Item1
          </button>
          <button type="button" tabIndex={0}>
            Item2
          </button>
          <button type="button" tabIndex={0}>
            Item3
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
