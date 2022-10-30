import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { arrayStockData } from "../data/data";
import "./singleStock.style.scss";
import { CustomLinearChart } from "./CustomLinearChart";
import SecondaryButton from "../components/SecondaryButton";

const SingleStock = () => {
  const { stockSymbol } = useParams();

  const currentStock = arrayStockData.find(stock => {
    return stock.unusedTable.symbol === stockSymbol;
  });

  return (
    <div className="single-stock">
      <div className="stock-left-part">
        <div className="above-chart">
          <Dropdown />
          <div className="stock-buttons-container">
            <SecondaryButton innerText="MAX" />
            <SecondaryButton innerText="YTD" />
            <SecondaryButton innerText="5Y" />
            <SecondaryButton innerText="1Y" />
            <SecondaryButton innerText="6M" />
            <SecondaryButton innerText="1M" />
            <SecondaryButton innerText="5D" />
            <SecondaryButton innerText="1D" />
          </div>
        </div>
        <div className="test">
          <CustomLinearChart />
        </div>
      </div>
      <div className="stock-right-part">
        <div>{currentStock?.usedTable.icon}</div>
      </div>
    </div>
  );
};

export default SingleStock;
