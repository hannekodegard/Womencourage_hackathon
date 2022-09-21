import { MapContainer, TileLayer } from "react-leaflet";

const MapView = () => {
  return (
    <div id="map" style={{ height: "100%", width: "100vw" }}>
      <MapContainer
        center={[55.9533, -3.1883]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
        doubleClickZoom
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
export default MapView;
