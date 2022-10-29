import { useParams } from "react-router-dom";
import { data } from "../data/data";
import "./singleStock.style.scss";
const SingleStock = () => {
  const { stockSymbol } = useParams();

  const currentStock = data.find(stock => {
    return stock.unusedTable.symbol === stockSymbol;
  });

  return (
    <section className="single-stock">
      <div className="stock-right-part">
        <div className=""></div>
      </div>
      <div className="stock-left-part"></div>
      {/* <div>{currentStock?.usedTable.icon}</div> */}
    </section>
  );
};

export default SingleStock;
