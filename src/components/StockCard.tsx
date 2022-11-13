import { useParams } from "react-router-dom";
import { arrayStockData, profits } from "../data/data";
import "./stockCard.style.scss";

const StockCard = () => {
  const { stockSymbol } = useParams();

  const addArrayElements = (arrayOfObjects: any) => {
    let sum = 0;
    for (let i = 0; i < arrayOfObjects.length; i++) sum += arrayOfObjects[i].value;

    return sum;
  };

  const currentStock = arrayStockData.find(stock => {
    return stock.unusedTable.symbol === stockSymbol;
  });

  // TODO: Make this code cleaner, typescript really screwed my brain here
  let aux;
  let lastFourProfits: any = [];
  Object.entries(profits).forEach(entry => {
    if (entry[0] === stockSymbol) {
      aux = entry[1];
      for (let i = 0; i < aux?.length; i++) lastFourProfits.push(aux[i]);
    }
  });

  const formattedMarketCap = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(currentStock!.unusedTable.nrShares * currentStock!.usedTable.price);

  const eps = addArrayElements(lastFourProfits) / currentStock!.unusedTable.nrShares;

  // TODO: Use map function instead for cleaner code
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
          <div className="name">Market Cap</div>
          <div>{formattedMarketCap} lei</div>
        </div>
        <div className="label">Financials</div>
        <div className="info">
          <div className="name">P/E</div>
          <div>{parseFloat((currentStock!.usedTable.price / eps).toFixed(2))}</div>
        </div>
        <div className="info">
          <div className="name">EPS</div>
          <div>{parseFloat(eps.toFixed(2))}</div>
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
