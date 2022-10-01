import { useState, useEffect, useRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styles from "./index.modules.scss";
import { Marker } from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibG9yZW1hcnUiLCJhIjoiY2w4cTNlMnd5MnB1NDNwbzV2a2hsYTgydyJ9.mfwMLGc00SMMSwc6jl8XBg";

export default function Map({ long, lati }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(long);
  const [lat, setLat] = useState(lati);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lati],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className={styles.mapContainer} />
    </div>
  );
}
