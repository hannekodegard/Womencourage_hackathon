import { useEffect, useState } from "react";
import "./Artdex.css";
import CardComponent, { Art } from "./components/CardComponent";
import { data } from "./data";
import { BsPaletteFill } from "react-icons/bs";

const ArtDex = () => {
  const [filteredData, setFilteredData] = useState<Art[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const newData = data.filter((art) =>
      art.name.toLowerCase().includes(searchTerm)
    );
    setFilteredData(newData);
  }, [data, searchTerm]);

  return (
    <div>
      <div className="artdex-header">
        <BsPaletteFill size={28} />
        <h1>Artdex</h1>
      </div>
      <input
        placeholder="Search for art"
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
      <div className="grid-container">
        {filteredData.map((art) => (
          <CardComponent art={art} />
        ))}
      </div>
    </div>
  );
};

export default ArtDex;
