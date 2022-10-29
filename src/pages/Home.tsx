import SNGLogo from "../assets/SNGLogo";
import SNPLogo from "../assets/SNPLogo";
import TLVLogo from "../assets/TLVLogo";
import Grid from "../utils/Grid";
import "./home.style.scss";

const Home = () => {
  return (
    <div className="home-page">
      Home
      <TLVLogo />
      <SNGLogo />
      <SNPLogo />
      <Grid />
    </div>
  );
};

export default Home;
