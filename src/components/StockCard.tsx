import { useParams } from "react-router-dom";
import { arrayStockData } from "../data/data";
import "./stockCard.style.scss";

const StockCard = () => {
  const { stockSymbol } = useParams();

  const currentStock = arrayStockData.find(stock => {
    return stock.unusedTable.symbol === stockSymbol;
  });
  return (
    <div className="stock-card">
      <div className="card-info">
        <div className="icon">{currentStock?.usedTable.icon}</div>
        <div className="names">
          <div className="title">{currentStock?.usedTable.name}</div>
          <div className="symbol">{currentStock?.unusedTable.symbol.toUpperCase()}</div>
        </div>
      </div>
      <div className="card-data">
        <div className="label">Company Info</div>
        <div className="info">
          <div className="name">Industry</div>
          <div>{currentStock?.usedTable.industry}</div>
        </div>
        <div className="info">
          <div className="name">Market</div>
          <div>{currentStock?.unusedTable.market}</div>
        </div>
        <div className="info">
          <div className="name">Valuation</div>
          <div>{currentStock?.usedTable.valuation}</div>
        </div>
        <div className="label">Financials</div>
        <div className="info">
          <div className="name">P/E</div>
          <div>{currentStock?.unusedTable.pe}</div>
        </div>
        <div className="info">
          <div className="name">EPS</div>
          <div>{currentStock?.unusedTable.eps}</div>
        </div>
        <div className="info">
          <div className="name">Div yield</div>
          <div>{currentStock?.usedTable.divYield}</div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
