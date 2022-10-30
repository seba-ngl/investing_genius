import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { arrayStockData } from "../data/data";
import "./singleStock.style.scss";
import { CustomLinearChart } from "./CustomLinearChart";
import SecondaryButton from "../components/SecondaryButton";

const SingleStock = () => {
  const timelineButtons = ["MAX", "YTD", "5Y", "1Y", "6M", "1M", "5D", "1D"];
  const { stockSymbol } = useParams();

  const currentStock = arrayStockData.find(stock => {
    return stock.unusedTable.symbol === stockSymbol;
  });

  return (
    // TODO: Change from ChartJS to Rechart
    <div className="single-stock">
      <div className="stock-left-part">
        <div className="above-chart">
          <Dropdown />
          <div className="stock-buttons-container">
            {timelineButtons.map((buttonDate, index) => (
              <SecondaryButton innerText={buttonDate} key={index} />
            ))}
          </div>
        </div>
        <div
          style={{
            height: "70vh",
          }}
        >
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
