import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ArtDex from "./Artdex";
import { ArtView } from "./ArtView";
import Footer from "./components/Footer";
import Home from "./Home";
import MapView from "./MapView";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ArtView currentId={1} />} />
          <Route path="/artdex" element={<ArtDex />} />
          <Route path="/map" element={<MapView />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
