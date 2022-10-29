import { HiSearch } from "react-icons/hi";

import "./searchbar.style.css";

type IProps = {
  placeholder?: string;
};

const Searchbar = ({ placeholder }: IProps) => {
  return (
    <div className="searchbar">
      <div className="flex">
        <input placeholder={placeholder} className="input" type="search" />
        <div className="search-icon">
          <HiSearch color="#02abde" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
