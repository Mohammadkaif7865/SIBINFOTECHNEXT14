import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

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

const agencyCards = [
  { title: "Digital Marketing Agency in Ahemdabad", image: "Ahemdabad.svg" },
  { title: "Digital Marketing Agency in Banglore", image: "banglore.svg" },
  { title: "Digital Marketing Agency in Brampton", image: "Brampton.svg" },
  { title: "Digital Marketing Agency in Canada", image: "canada.svg" },
  { title: "Digital Marketing Agency in Chicago", image: "chicago.svg" },
  { title: "Digital Marketing Agency in Dubai", image: "dubai.svg" },
  { title: "Digital Marketing Agency in Gurgaon", image: "Gurgaon.svg" },
  { title: "Digital Marketing Agency in Jeddah", image: "jeddah.svg" },
  { title: "Digital Marketing Agency in Los Angeles", image: "los angeles.svg" },
  { title: "Digital Marketing Agency in Montreal", image: "Montreal.svg" },
  { title: "Digital Marketing Agency in Noida", image: "noida.svg" },
  { title: "Digital Marketing Agency in Ottawa", image: "ottawa.svg" },
  { title: "Digital Marketing Agency in Pune", image: "pune.svg" },
  { title: "Digital Marketing Agency in San Diego", image: "san dieoge.svg" },
  { title: "Digital Marketing Agency in Saudi Arabia", image: "saudi arabia.svg" },
  { title: "Digital Marketing Agency in Surat", image: "surat.svg" },
  { title: "Digital Marketing Agency in United Arab Emirates", image: "United Arab Emirates.svg" },
  { title: "Digital Marketing Agency in Arizona", image: "Arizona.svg" },
  { title: "Digital Marketing Agency in Birmingham", image: "Birmingham.svg" },
  { title: "Digital Marketing Agency in Calgary", image: "Calgary.svg" },
  { title: "Digital Marketing Agency in Chandigarh", image: "chandigarh.svg" },
  { title: "Digital Marketing Agency in Dallas", image: "dallas.svg" },
  { title: "Digital Marketing Agency in Florida", image: "Florida.svg" },
  { title: "Digital Marketing Agency in Hydrabad", image: "hydrabad.svg" },
  { title: "Digital Marketing Agency in Kolkata", image: "kolkata.svg" },
  { title: "Digital Marketing Agency in Manchester", image: "manchester.svg" },
  { title: "Digital Marketing Agency in Mumbai", image: "mumbai.svg" },
  { title: "Digital Marketing Agency in North Carolina", image: "North Carolina.svg" },
  { title: "Digital Marketing Agency in Philadelphia", image: "Philadelphia.svg" },
  { title: "Digital Marketing Agency in Riyadh", image: "riyadh.svg" },
  { title: "Digital Marketing Agency in San Fransisco", image: "san fransisco.svg" },
  { title: "Digital Marketing Agency in Seattle", image: "Seattle.svg" },
  { title: "Digital Marketing Agency in Texas", image: "texas.svg" },
  { title: "Digital Marketing Agency in Vancouver", image: "vancouver.svg" },
  { title: "Digital Marketing Agency in Austin", image: "Austin.svg" },
  { title: "Digital Marketing Agency in Boston", image: "Boston.svg" },
  { title: "Digital Marketing Agency in California", image: "California.svg" },
  { title: "Digital Marketing Agency in Chennai", image: "Chennai.svg" },
  { title: "Digital Marketing Agency in Delhi", image: "Delhi.svg" },
  { title: "Digital Marketing Agency in Glasgow", image: "Glasgow.svg" },
  { title: "Digital Marketing Agency in Jaipur", image: "jaipur.svg" },
  { title: "Digital Marketing Agency in London", image: "London.svg" },
  { title: "Digital Marketing Agency in Mississauga", image: "Mississauga.svg" },
  { title: "Digital Marketing Agency in New York", image: "new york.svg" },
  { title: "Digital Marketing Agency in Oman", image: "Oman.svg" },
  { title: "Digital Marketing Agency in Phoenix, Arizona", image: "Phoenix, Arizona.svg" },
  { title: "Digital Marketing Agency in San Antonio", image: "san antonio.svg" },
  { title: "Digital Marketing Agency in Sarjah", image: "sarjah.svg" },
  { title: "Digital Marketing Agency in Singapore", image: "singapore.svg" },
  { title: "Digital Marketing Agency in Toronto", image: "toronto.svg" },
  { title: "Digital Marketing Agency in Washington DC", image: "washington dc.svg" }
];


const Map = () => {
  return (
    <section className="trusted">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <p className="fontWeight600 title text-white">Our Footprint</p>
            <h3 className="mt-4 mb-4 heading fontHeading2 fontWeight300 text-white">
              Expanding Your Brand’s Reach Globally with <br />
              <span className="fontWeight600">SIB Infotech</span>
            </h3>
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

      <div className="containerFull mt-5 position-relative">
        <div className="swiper-button-prev custom-swiper-arrow">
          <FaArrowLeft />
        </div>

        <div className="swiper-button-next custom-swiper-arrow">
          <FaArrowRight />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={6} // Display 6 items per view
          loop={true} // Loop the slides
         
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
