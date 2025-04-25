"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Map markers
const markers = [
  { name: "Mumbai", coordinates: [72.8777, 19.076] },
  { name: "Delhi", coordinates: [77.209, 28.6139] },
  { name: "London", coordinates: [0.1278, 51.5074] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Paris", coordinates: [2.3522, 48.8566] },
  { name: "Berlin", coordinates: [13.405, 52.52] },
  { name: "Moscow", coordinates: [37.6173, 55.7558] },
  { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] },
  { name: "Cape Town", coordinates: [18.4241, -33.9249] },
  { name: "Toronto", coordinates: [-79.3832, 43.6532] },
  { name: "Beijing", coordinates: [116.4074, 39.9042] },
  { name: "Seoul", coordinates: [126.978, 37.5665] },
  { name: "Mexico City", coordinates: [-99.1332, 19.4326] },
];

// Swiper cards
const agencyCards = [
  { title: "Digital Marketing Agency in Ahmedabad", image: "Ahemdabad.svg" },
  { title: "Digital Marketing Agency in Bangalore", image: "banglore.svg" },
  { title: "Digital Marketing Agency in Chennai", image: "Chennai.svg" },
  { title: "Digital Marketing Agency in Delhi", image: "Delhi.svg" },
  { title: "Digital Marketing Agency in Hyderabad", image: "hydrabad.svg" },
  { title: "Digital Marketing Agency in Jaipur", image: "jaipur.svg" },
  { title: "Digital Marketing Agency in Kolkata", image: "kolkata.svg" },
  { title: "Digital Marketing Agency in Mumbai", image: "mumbai.svg" },
  { title: "Digital Marketing Agency in Pune", image: "pune.svg" },
  { title: "Digital Marketing Agency in Surat", image: "surat.svg" },
];

const Map = () => {
  return (
    <section className="trusted">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <h5 className="fontWeight600 text-white">Our Footprint</h5>
            <h4 className="mt-4 mb-4 heading fontHeading2 fontWeight300 text-white">
              Expanding Your Brand’s Reach Globally with <br />
              <span className="fontWeight600">SIB Infotech</span>
            </h4>
            <p className="mt-4 text-white">
              At SIB Infotech, we have delivered customized digital marketing
              solutions to clients across 40+ countries. Our experience spans
              diverse regions, from North America and Europe to Asia, the Middle
              East, and Oceania, allowing us to create market-specific
              strategies that resonate with local audiences while aligning with
              global business goals.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="overflow-hidden mt-5" style={{ height: "250px" }}>
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

                {markers.map(({ name, coordinates }, index) => (
                  <Marker key={`${name}-${index}`} coordinates={coordinates}>
                    <circle r={5} fill="#F00" stroke="#fff" strokeWidth={1} />
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Cards  */}
      <div className="containerFull mt-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={false}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
        >
          {agencyCards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="img_cities text-center">
                <div className="img_box">
                  <img
                    className="w-100 h-100 d-block mx-auto fit-contain"
                    loading="lazy"
                    src={`/assets/images/agency/${item.image}`}
                    alt={item.title}
                  />
                </div>
                <p className="mt-2 text-white">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Map;
