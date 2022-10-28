import { HiSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./searchbar.style.css";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="flex">
        <input placeholder="test" className="input" />
        <div className="search-icon">
          <HiSearch color="#02abde" />
        </div>
        <button type="button" tabIndex={0} className="close-button" aria-label="delete input text">
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
