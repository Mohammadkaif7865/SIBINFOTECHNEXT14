"use client";
"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Free TopoJSON map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Mumbai", coordinates: [72.8777, 19.076] },
  { name: "Delhi", coordinates: [77.209, 28.6139] },
  { name: "London", coordinates: [0.1278, 51.5074] },

  { name: "Sydney", coordinates: [151.2093, -33.8688] }, // Australia
  { name: "New York", coordinates: [-74.006, 40.7128] }, // USA
  { name: "Tokyo", coordinates: [139.6917, 35.6895] }, // Japan
  { name: "Paris", coordinates: [2.3522, 48.8566] }, // France
  { name: "Berlin", coordinates: [13.405, 52.52] }, // Germany
  { name: "Moscow", coordinates: [37.6173, 55.7558] }, // Russia
  { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] }, // Brazil
  { name: "Cape Town", coordinates: [18.4241, -33.9249] }, // South Africa
  { name: "Toronto", coordinates: [-79.3832, 43.6532] }, // Canada
  { name: "Beijing", coordinates: [116.4074, 39.9042] }, // China
  { name: "Seoul", coordinates: [126.978, 37.5665] }, // South Korea
  { name: "Mexico City", coordinates: [-99.1332, 19.4326] }, // Mexico
  { name: 'Auckland', coordinates: [174.7633, -36.8485] }, // New Zealand
  { name: 'Delhi', coordinates: [77.2090, 28.6139] },
  { name: 'Tokyo', coordinates: [139.6917, 35.6895] },
  { name: 'Beijing', coordinates: [116.4074, 39.9042] },
  { name: 'Seoul', coordinates: [126.9780, 37.5665] },
  { name: 'Bangkok', coordinates: [100.5018, 13.7563] },
  { name: 'Jakarta', coordinates: [106.8456, -6.2088] },
  { name: 'London', coordinates: [0.1278, 51.5074] },
  { name: 'Paris', coordinates: [2.3522, 48.8566] },
  { name: 'Berlin', coordinates: [13.4050, 52.5200] },
  { name: 'Rome', coordinates: [12.4964, 41.9028] },
  { name: 'Madrid', coordinates: [-3.7038, 40.4168] },
  { name: 'Amsterdam', coordinates: [4.9041, 52.3676] },
  { name: 'Moscow', coordinates: [37.6173, 55.7558] },
  { name: 'New York', coordinates: [-74.0060, 40.7128] },
  { name: 'Los Angeles', coordinates: [-118.2437, 34.0522] },
  { name: 'Toronto', coordinates: [-79.3832, 43.6532] },
  { name: 'Mexico City', coordinates: [-99.1332, 19.4326] },
  { name: 'São Paulo', coordinates: [-46.6333, -23.5505] },
  { name: 'Buenos Aires', coordinates: [-58.3816, -34.6037] },
  { name: 'Lima', coordinates: [-77.0428, -12.0464] },
  { name: 'Cairo', coordinates: [31.2357, 30.0444] },
  { name: 'Lagos', coordinates: [3.3792, 6.5244] },
  { name: 'Cape Town', coordinates: [18.4241, -33.9249] },
  { name: 'Sydney', coordinates: [151.2093, -33.8688] },
  { name: 'Melbourne', coordinates: [144.9631, -37.8136] },

];

const Map = () => {
  return (
    <section className="trusted">
      {/* <h4 className="mb-4 text-center large_heading2 fontHeading2 fontWeight300 text-white">
        Across The <span className="fontWeight600">Globe Presence</span>
      </h4> */}
      {/* <Image
        className="w-100 object-fit-contain"
        width={1300}
        height={400}
        src="/assets/images/map.jpg"
        alt=""
      /> */}

      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <h5 className="fontWeight600 text-white">Our Footprint</h5>
            <h4 className="mt-4 mb-4 heading fontHeading2 fontWeight300 text-white">
              Expanding Your Brand’s Reach Globally with <br/><span className="fontWeight600">SIB Infotech</span>
            </h4>
            <p className="mt-4">
            At SIB Infotech, we have delivered customized digital marketing solutions to clients across 40+ countries. Our experience spans diverse regions, from North America and Europe to Asia, the Middle East, and Oceania, allowing us to create market-specific strategies that resonate with local audiences while aligning with global business goals. 
            </p>
          </div>
          <div className="col-lg-6">
            <div
              className="overflow-hidden mt-5"
              style={{
                height: "250px",
              }}
            >
              <ComposableMap
                projection="geoMercator"
                width={1000}
                height={500}
                projectionConfig={{ scale: 130 }}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#E0E0E0"
                        stroke="#FFF"
                      />
                    ))
                  }
                </Geographies>

                {markers.map(({ name, coordinates }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <circle r={5} fill="#F00" stroke="#fff" strokeWidth={1} />
                    <text
                      textAnchor="middle"
                      y={-10}
                      style={{
                        fontFamily: "system-ui",
                        fill: "red",
                        fontSize: "12px",
                      }}
                    >
                      {/* {name}   */}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
