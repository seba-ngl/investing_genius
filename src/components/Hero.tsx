import Dropdown from "../primitives/Dropdown";
import "./hero.scss";
import Table from "./Table";
import { bvbData } from "../data/generalData";
import { useState } from "react";

const Hero = () => {
  // TODO: make this with redux
  const [selectedOption, setSelectedOption] = useState(0);
  const options = ["BVB - RO", "NASDAQ - USA", "BRUX - UK"];
  let market = options[selectedOption].substring(
    0,
    options[selectedOption].indexOf(" ")
  );

  return (
    <div className="hero">
      <div className="hero-header">
        <h1 className="main-text">Largest {market} companies</h1>
        <Dropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          placeholder={"Select Market"}
        />
      </div>

      <div className="table-container">
        <Table
          headNames={[
            "Company",
            "Symbol",
            "Market Cap",
            "P/E",
            "Div Yield",
            "Industry",
          ]}
          ignoredValues={["market", "name"]}
          additionalLinkBefore={`stocks/${market.toLocaleLowerCase()}`}
          data={bvbData}
        />
      </div>
    </div>
  );
};

export default Hero;
