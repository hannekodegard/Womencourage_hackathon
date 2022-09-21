import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ArtDex from "./Artdex";
import Footer from "./components/Footer";
import MapView from "./MapView";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "30px" }}>
        <Routes>
          <Route path="/artdex" element={<ArtDex />} />
          <Route path="/map" element={<MapView />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
