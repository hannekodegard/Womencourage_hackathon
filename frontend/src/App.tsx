import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ArtDex from "./Artdex";
import { ArtView } from "./ArtView";
import Footer from "./components/Footer";
import Events from "./Events";
import MapView from "./MapView";

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: "100%", maxHeight: "100vh", overflow: "auto" }}>
        <Routes>
          <Route path="/art" element={<ArtView currentId={1} />} />
          <Route path="/artdex" element={<ArtDex />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
