import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { arrayStockData } from "../data/data";
import "./singleStock.style.scss";
import { CustomLinearChart } from "./CustomLinearChart";
import SecondaryButton from "../components/SecondaryButton";
import StockCard from "../components/StockCard";
import BreadCrumbs from "../components/BreadCrumbs";

const SingleStock = () => {
  const timelineButtons = ["MAX", "YTD", "5Y", "1Y", "6M", "1M", "5D", "1D"];
  const { stockSymbol } = useParams();

  const currentStock = arrayStockData.find(stock => {
    return stock.unusedTable.symbol === stockSymbol;
  });

  return (
    <div className="single-stock">
      <div className="stock-left-part">
        <div className="breadcrumb">
          <BreadCrumbs />
        </div>

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
            marginTop: 10,
          }}
        >
          <CustomLinearChart />
        </div>
      </div>
      <div className="stock-right-part">
        <StockCard />
      </div>
    </div>
  );
};

export default SingleStock;
