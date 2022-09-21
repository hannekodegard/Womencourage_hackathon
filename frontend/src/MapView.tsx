import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { data } from "./data";

const MapView = () => {
  const Markers = data.map((art) => (
    <Marker position={[art.lat, art.lon]} key={art.id}>
      <Popup>
        <span>{art.name}</span>
      </Popup>
    </Marker>
  ));

  return (
    <div id="map" style={{ height: "100%", width: "100vw" }}>
      <MapContainer
        center={[63.4305, 10.3951]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
        doubleClickZoom
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Markers}
      </MapContainer>
    </div>
  );
};
export default MapView;
