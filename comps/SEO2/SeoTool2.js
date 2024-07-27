import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Counter from "./Counter";
const SeoTools2 = () => {
  const tools2 = [
    {
      title: "Organic Sessions ",
      ranking: "Billion+",
      targetValue: 2,
      src: "/assets/images/icons/services/laptop.png",
      alt: "Organic Sessions ",
    },
    {
      title: "#1 Ranking Keywords",
      ranking: "+",
      targetValue: 50000,
      src: "/assets/images/icons/services/rankings.png",
      alt: "#1 Ranking Keywords",
    },
    {
      title: "Clicks",
      ranking: "Billion+",
      targetValue: 1.8,
      src: "/assets/images/icons/services/click.png",
      alt: "Clicks",
    },
    {
      title: "Total Users",
      ranking: "Million+",
      targetValue: 900,
      src: "/assets/images/icons/services/user.png",
      alt: "Total Users",
    },
    {
      title: "Website Audits",
      ranking: "+",
      targetValue: 40,
      src: "/assets/images/icons/services/website4.png",
      alt: "Website Audits",
    },
    {
      title: "Leads & Inquires",
      ranking: "Million+",
      targetValue: 1.5,
      src: "/assets/images/icons/services/lead-generation.png",
      alt: "lead-generation",
    },
    {
      title: "YOY increase in Conversion",
      ranking: "%",
      targetValue: 480,
      src: "/assets/images/icons/services/questions.png",
      alt: "YOY increase in Conversion",
    },
    {
      title: "Growth in Paid Search Revenue",
      ranking: "%",
      targetValue:630,
      src: "/assets/images/icons/services/good-review.png",
      alt: "Growth in Paid Search Revenue",
    },
  ];
  const tools = [
    {
      src: "/assets/images/google-search-console.webp",
      alt: "Google Search Console Logo",
    },
    {
      src: "/assets/images/moz.webp",
      alt: "Moz Logo",
    },
    {
      src: "/assets/images/searchmetrics.webp",
      alt: "Searchmetrics Logo",
    },
    {
      src: "/assets/images/semrush.webp",
      alt: "Semrush Logo",
    },
    {
      src: "/assets/images/ahrefs.webp",
      alt: "ahrefs Logo",
    },
    {
      src: "/assets/images/screamingfrog.webp",
      alt: "Screaming Frog Logo",
    },
    {
      src: "/assets/images/similarweb.webp",
      alt: "Similar Web Logo",
    },
    {
      src: "/assets/images/rankwatch.webp",
      alt: "Rankwatch Logo",
    },
    {
      src: "/assets/images/ubersuggest.webp",
      alt: "Ubersuggest Logo",
    },
    {
      src: "/assets/images/kwfinder.webp",
      alt: "KW finder Logo",
    },
    {
      src: "/assets/images/spy-fu.webp",
      alt: "Spy Fu Logo",
    },
    {
      src: "/assets/images/quilbot.webp",
      alt: "Quilbot Logo",
    },
  ];
  return (
    <section className="">
      <div className="containerFull  ">
        <h3 className="large_heading text-center fontHeading fontWeight600 fontHeading">
          Our White Label SEO Results
        </h3>
        <div className=" mt-5">
          <div className="mb-4">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              //   centeredSlides={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              pagination={false}
              // loop={true}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },

                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide_card">
                  <div className="slide_card_img">
                    <Image
                      className="w-100 h-100"
                      quality={100}
                      width={500}
                      height={200}
                      src={"/assets/images/seo-result/rnb-uni.png"}
                      alt="rnb-global-university-kota-city-kota-rajasthan-colleges"
                    />
                  </div>
                  <div className="slide_card_content ">
                    <div>
                      <h4 className=" fontWeight700 d-flex align-items-center   gap-2">
                        +600%{" "}
                        <Image
                          className="h-auto"
                          width={30}
                          height={30}
                          src={"/assets/images/icons/seo-result/data-analytics-arrow.png"}
                          alt="rnb"
                        />
                      </h4>
                      <p className="fontWeight600   ">
                        Organic  Growth
                      </p>
                    </div>
                    <div>
                      <h4 className=" fontWeight700 d-flex align-items-center   gap-2">
                        400+{" "}
                        <Image
                          className="h-auto"
                          width={30}
                          height={30}
                          src={"/assets/images/icons/seo-result/data-analytics-arrow.png"}
                          alt="rnb"
                        />
                      </h4>
                      <p className="fontWeight600  small_heading ">
                        Impression
                      </p>
                    </div>
                    <div>
                      <h4 className=" fontWeight700 d-flex align-items-center   gap-2">
                        +270{" "}
                        <Image
                          className="h-auto"
                          width={30}
                          height={30}
                          src={"/assets/images/icons/seo-result/data-analytics-arrow.png"}
                          alt="rnb"
                        />
                      </h4>
                      <p className="fontWeight600  small_heading ">
                       Clicks
                      </p>
                    </div>
                    {/* <div>
                      <p>400+ Applications</p>
                      <p>270% Clicks</p>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_card">
                  <div className="slide_card_img">
                    <Image
                      className="w-100 h-100"
                      quality={100}
                      width={500}
                      height={200}
                      src={"/assets/images/seo-result/veeraco.png"}
                      alt="Veeraco Colourants Private Limited"
                    />
                  </div>
                  <div className="slide_card_content b">
                    <div>
                      <h4 className=" fontWeight700 d-flex align-items-center   gap-2">
                        +400%{" "}
                        <Image
                          className="h-auto"
                          width={40}
                          height={40}
                          src={"/assets/images/icons/seo-result/rise.png"}
                          alt="rnb"
                        />
                      </h4>
                      <p className="fontWeight600  small_heading ">
                        Organic Growth
                      </p>
                    </div>
                    <div>
                      <p>345+ Impression</p>
                      <p>280% Clicks</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_card">
                  <div className="slide_card_img">
                    <Image
                      className="w-100 h-100"
                      quality={100}
                      width={500}
                      height={200}
                      src={"/assets/images/seo-result/bmc.png"}
                      alt="https://www.bmcelections.com/"
                    />
                  </div>
                  <div className="slide_card_content">
                    <div>
                      <h4 className=" fontWeight700 d-flex align-items-center   gap-2">
                        +230%{" "}
                        <Image
                          className="h-auto"
                          width={40}
                          height={40}
                          src={"/assets/images/icons/seo-result/rise.png"}
                          alt="rnb"
                        />
                      </h4>
                      <p className="fontWeight600  small_heading ">
                        Organic Growth
                      </p>
                    </div>
                    <div>
                      <p>300+ Impression</p>
                      <p>270% Clicks</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" seo_result_right2 mt-4 mt-lg-0 ">
            {tools2.map((value, i) => {
              return (
                <div className=" items d-flex align-items-center justify-content-center px-3  shadow rounded-3 border ">
                  <div className="">
                    {/* <Image
                      className="mx-auto d-block "
                      width={50}
                      height={50}
                      src={value.src}
                      alt="loading"
                    /> */}
                    <div className="text-center fontWeight600 h3 d-flex justify-content-center align-items-center gap-1   fontWeight500">
                      <Counter targetValue={value.targetValue} />{" "}
                      {value.ranking}
                    </div>
                    <p
                      className=" text-center mt-2"
                      style={{ fontSize: "15px" }}
                    >
                      {value.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

      <div className="containerFull">
        <div className="row mt-5">
          <div className="col-lg-12">
            <h3 className="sub_heading fontWeight500 fontHeading mt-4">
              Some of the Best SEO Tools for Auditing & Monitoring Effective SEO
              used by us.
            </h3>
          </div>
        </div>

        <div className="row mt-lg-3  ">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="col-lg-2 col-6 col-sm-3 position-relative"
            >
              <div className="toolsLogo">
                <Image
                  className=" h-auto w-100 h-50"
                  src={tool.src}
                  alt={tool.alt}
                  quality={100}
                  width={180}
                  height={48}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoTools2;
