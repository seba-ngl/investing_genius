import TableGrid from "../utils/TableGrid";
import "./home.style.scss";
import { data } from "../data/data";

const Home = () => {
  return (
    <div className="home-page">
      <TableGrid data={data} numberOfColumns={5} />
    </div>
  );
};

export default Home;
