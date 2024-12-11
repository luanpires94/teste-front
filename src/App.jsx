import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Highlights from "./pages/Highlights";
import Favorites from "./pages/Favorites";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos-em-destaque" element={<Highlights />} />
          <Route path="/meus-favoritos" element={<Favorites />} />
        </Routes>
      </Router>
      <FilterBar />
    </>
  );
}

export default App;
