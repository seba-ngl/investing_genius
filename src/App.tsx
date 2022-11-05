import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Market from "./pages/Market";
import SingleStock from "./pages/SingleStock";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:market" element={<Market />} />
          <Route path="/ro/:stockSymbol" element={<SingleStock />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
