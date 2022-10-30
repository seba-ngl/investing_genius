import TableGrid from "../utils/TableGrid";
import "./home.style.scss";
import { arrayStockData } from "../data/data";

const Home = () => {
  return (
    <div className="home-page">
      <TableGrid data={arrayStockData} numberOfColumns={5} />
    </div>
  );
};

export default Home;
