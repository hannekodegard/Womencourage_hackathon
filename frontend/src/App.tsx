import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ArtDex from "./Artdex";
import { ArtView } from "./ArtView";
import Footer from "./components/Footer";
import MapView from "./MapView";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/artdex" element={<ArtDex />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/art" element={<ArtView currentId={1} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
