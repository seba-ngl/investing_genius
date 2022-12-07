import { LinearChart } from "../components/LinearChart";
import StockCard from "../components/StockCard";
import "./singleStock.scss";
import { bvbData } from "../data/generalData";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../primitives/BreadCrumbs";

const SingleStock = () => {
  const { stockSymbol } = useParams();

  const currentStock = bvbData.find((object: typeof bvbData[0]) => {
    return object.symbol === stockSymbol;
  });

  const stockNames = [
    "Symbol",
    "Market Cap",
    "Valuation",
    "Div Yield",
    "Industry",
  ];
  const ignoredValues = ["logo", "market", "name"];
  const links = ["home", currentStock.symbol];

  return (
    <div className="single-stock">
      <div className="breadcrumbs">
        <BreadCrumbs links={links} />
      </div>
      <div className="data-section">
        <div className="graph rounded-card">
          <LinearChart />
        </div>
        <div className="right-part">
          <StockCard
            data={currentStock}
            stockNames={stockNames}
            ignoredValues={ignoredValues}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleStock;
