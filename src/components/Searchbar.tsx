import { HiSearch } from "react-icons/hi";

import "./searchbar.style.scss";

type IProps = {
  placeholder?: string;
};

const Searchbar = ({ placeholder }: IProps) => {
  return (
    <div className="searchbar-component">
      <div className="flex">
        <input placeholder={placeholder} className="input" type="search" aria-label="Search" />
        <div className="search-icon">
          <HiSearch color="#02abde" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
