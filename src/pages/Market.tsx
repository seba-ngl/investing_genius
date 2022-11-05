import TableGrid from "../utils/TableGrid";
import "./market.style.scss";
import { arrayStockData } from "../data/data";

const Market = () => {
  return (
    <div className="market-page">
      <TableGrid data={arrayStockData} numberOfColumns={5} />
    </div>
  );
};

export default Market;
