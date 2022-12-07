import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

import "./dropdown.scss";
import DropdownList from "./DropdownList";

type IProps = {
  options: string[];
  selectedOption: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
  placeholder?: string;
};

// TODO: add optional searchbar

const Dropdown = ({
  options,
  placeholder,
  selectedOption,
  setSelectedOption,
}: IProps) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      default:
        break;
    }
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className="container">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOptionsOpen}
        className={isOptionsOpen ? "expanded" : ""}
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
      >
        {placeholder ?? options[selectedOption]}
        <AiFillCaretDown size={24} />
      </button>
      <DropdownList
        options={options}
        isOptionsOpen={isOptionsOpen}
        setIsOptionsOpen={setIsOptionsOpen}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export default Dropdown;
