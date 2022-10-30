import { useRef, useEffect, useState } from "react";
import "./dropdown.style.scss";

const Dropdown = () => {
  const wrapperRef = useRef<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="dropdown">
      <button
        ref={wrapperRef}
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
