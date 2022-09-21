import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ArtView } from "./ArtView";

type Data = {
  name: string;
  image_url: string;
  id: number;
  artist: string;
  artType: string;
  about: string;
  year: number;
  height: string;
};

export const artPieces: Data[] = [
  {
    name: "Gutt på huske",
    image_url: "https://www.fineart.no/i/og/1016945-0.jpg",
    id: 1,
    artist: "Ståle Gerhardsen",
    artType: "Street art",
    about:
      "This artpiece is made by Ståle Gerhardsen, a norwegian graphical designer and street artist. He has several different pieces of art around Trondheim, and this person is a familiar part of his pieces.",
    year: 2018,
    height: "3 m",
  },
  {
    name: "Gutt på huske",
    image_url:
      "https://images.squarespace-cdn.com/content/v1/56ddc091b09f95fd0a61b7e2/1519896978572-F4H3JSMQKVV8NVDADB8W/GerhardsenKarlsen_staale_silketrykk_110.JPG?format=750w",
    id: 2,
    artist: "Ståle Gerhardsen",
    artType: "Street art",
    about:
      "This artpiece is made by Ståle Gerhardsen, a norwegian graphical designer and street artist. He has several different pieces of art around Trondheim, and this person is a familiar part of his pieces.",
    year: 2018,
    height: "3 m",
  },
];

const currentId = 1;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ArtView currentId={currentId} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
