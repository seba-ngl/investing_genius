import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SingleStock from "./pages/SingleStock";

const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return (
    <div className="home" data-theme={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/stocks/bvb/:stockSymbol" element={<SingleStock />} />
        <Route path="/*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
