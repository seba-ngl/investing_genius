import "./home.style.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <Link to={"/ro"}>Romanian market</Link>
    </div>
  );
};

export default Home;
