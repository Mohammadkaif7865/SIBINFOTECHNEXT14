import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const pinnedCountries = [
  { name: "USA", coordinates: [-98.5795, 39.8283] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Brazil", coordinates: [-51.9253, -14.235] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Australia", coordinates: [133.7751, -25.2744] },
];

const Presence = () => {
  return (
    <section>
      <div className="containerFull">
        <div
          className="b"
          style={{
            width: "100%",
            height: "500px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ComposableMap projection="geoMercator" className="w-100 b">
            <ZoomableGroup zoom={1} minZoom={2} maxZoom={5}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#DDD"
                      stroke="#FFF"
                      strokeWidth={0.5}
                    />
                  ))
                }
              </Geographies>

              {pinnedCountries.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={5} fill="red" stroke="#fff" strokeWidth={1.5} />
                  <text
                    textAnchor="middle"
                    y={-10}
                    style={{ fontSize: "10px", fill: "#333" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
};

export default Presence;
