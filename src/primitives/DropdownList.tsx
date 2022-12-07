import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import "./dropdownList.scss";

type IProps = {
  options: string[];
  isOptionsOpen: boolean;
  selectedOption: number;
  setIsOptionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
};

const DropdownList = ({
  options,
  isOptionsOpen,
  setIsOptionsOpen,
  selectedOption,
  setSelectedOption,
}: IProps) => {
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

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const renderOptions = (options: string[]) => {
    return options.map((option, index) => (
      <li
        key={index}
        id={option}
        role="option"
        aria-selected={selectedOption == index}
        tabIndex={0}
        onKeyDown={handleKeyDown(index)}
        onClick={() => {
          setSelectedThenCloseDropdown(index);
        }}
      >
        {selectedOption === index ? (
          <>
            <div className="absolute ">
              <BsCheck2 size={24} />
            </div>
            {option}
          </>
        ) : (
          option
        )}
      </li>
    ));
  };

  return (
    <ul
      className={`options ${isOptionsOpen ? "show" : ""}`}
      role="listbox"
      aria-activedescendant={options[selectedOption]}
      tabIndex={-1}
      onKeyDown={handleListKeyDown}
    >
      {renderOptions(options)}
    </ul>
  );
};

export default DropdownList;
