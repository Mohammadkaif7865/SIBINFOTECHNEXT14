import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import {
  FaInstagram,
  FaPlay,
  FaHeart,
  FaComment,
  FaTimes,
  FaEye,
  FaFire,
  FaArrowRight,
} from "react-icons/fa";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/sibinfotech";

const fallbackReelsData = [
  {
    shortcode: "DcYmKXwNUZj",
    url: "https://www.instagram.com/reel/DcYmKXwNUZj/",
    embedUrl: "https://www.instagram.com/reel/DcYmKXwNUZj/embed",
    caption: "When you just wanted one day to recharge, but end up giving a full theatrical performance instead! 😂",
    likes: 124,
    comments: 18,
    views: 1450,
  },
  {
    shortcode: "DcbM1z_N3pL",
    url: "https://www.instagram.com/reel/DcbM1z_N3pL/",
    embedUrl: "https://www.instagram.com/reel/DcbM1z_N3pL/embed",
    caption: "Corporate office reality vs expectation! Does any corporate office actually have mature people? 🚀",
    likes: 210,
    comments: 29,
    views: 2890,
  },
  {
    shortcode: "DcfXk3oNq8R",
    url: "https://www.instagram.com/reel/DcfXk3oNq8R/",
    embedUrl: "https://www.instagram.com/reel/DcfXk3oNq8R/embed",
    caption: "Happy World Entrepreneurs' Day! To all who start with an idea and make it happen. We salute your persistence! ✨",
    likes: 340,
    comments: 42,
    views: 4120,
  },
];

function formatCount(value) {
  if (typeof value !== "number" || value <= 0) return null;
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return `${value}`;
}

function ReelCard({ reel, onPlay }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // If thumbnail exists, use it; if error occurs, fallback gracefully
  const thumbnailSrc = !imgError && (reel.thumbnail || reel.rawThumbnail);

  return (
    <div
      className="ig_reel_card"
      role="button"
      tabIndex={0}
      aria-label={
        reel.caption
          ? `Watch reel: ${reel.caption.slice(0, 50)}...`
          : "Watch SIB Infotech Instagram reel"
      }
      onClick={() => onPlay(reel)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPlay(reel);
        }
      }}
    >
      {/* Top Phone Header Mock */}
      <div className="ig_reel_phone_bar">
        <div className="ig_reel_phone_notch"></div>
      </div>

      {/* Main Media Thumbnail Box */}
      <div className="ig_reel_media_wrap">
        {thumbnailSrc ? (
          <img
            src={thumbnailSrc}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            className={`ig_reel_img ${imgLoaded ? "ig_reel_img_loaded" : ""}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              // Try raw thumbnail if proxied failed, else mark error
              if (reel.rawThumbnail && thumbnailSrc !== reel.rawThumbnail) {
                // switch to raw
                setImgError(false);
              } else {
                setImgError(true);
              }
            }}
          />
        ) : null}

        {(!thumbnailSrc || !imgLoaded) && (
          <div className="ig_reel_placeholder">
            <div className="ig_reel_placeholder_icon">
              <FaInstagram />
            </div>
            <span className="ig_reel_placeholder_text">SIB Infotech Reel</span>
          </div>
        )}

        {/* Ambient Overlay */}
        <div className="ig_reel_media_gradient"></div>

        {/* Top Badges */}
        <div className="ig_reel_top_info">
          <div className="ig_reel_account">
            <div className="ig_reel_avatar">
              <FaInstagram />
            </div>
            <span className="ig_reel_account_name">sibinfotech</span>
          </div>
          <span className="ig_reel_badge_tag">Reel</span>
        </div>

        {/* Center Animated Play Button */}
        <div className="ig_reel_play_trigger">
          <div className="ig_reel_play_circle">
            <FaPlay className="ig_reel_play_icon" />
          </div>
        </div>

        {/* Bottom Metrics (Likes, Comments, Views) */}
        <div className="ig_reel_metrics">
          {formatCount(reel.likes) && (
            <span className="ig_reel_metric_pill">
              <FaHeart className="text-danger" /> {formatCount(reel.likes)}
            </span>
          )}
          {formatCount(reel.comments) && (
            <span className="ig_reel_metric_pill">
              <FaComment className="text-info" /> {formatCount(reel.comments)}
            </span>
          )}
          {formatCount(reel.views) && (
            <span className="ig_reel_metric_pill">
              <FaEye className="text-warning" /> {formatCount(reel.views)}
            </span>
          )}
        </div>
      </div>

      {/* Card Caption Area */}
      {reel.caption && (
        <div className="ig_reel_caption_area">
          <p className="ig_reel_caption_text">{reel.caption}</p>
          <div className="ig_reel_view_cta">
            <span>Watch Full Reel</span>
            <FaArrowRight className="ig_reel_view_arrow" />
          </div>
        </div>
      )}
    </div>
  );
}

function InstagramReels() {
  const [reels, setReels] = useState([]);
  const [status, setStatus] = useState("loading");
  const [activeReel, setActiveReel] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/api/instagram-reels?pages=5&limit=24");
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        if (!cancelled && Array.isArray(json.reels) && json.reels.length > 0) {
          setReels(json.reels);
          setStatus("ready");
          return;
        }
        throw new Error("No reels returned");
      } catch {
        if (!cancelled) {
          setReels(fallbackReelsData);
          setStatus("fallback");
        }
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const closeLightbox = useCallback(() => setActiveReel(null), []);

  useEffect(() => {
    if (!activeReel) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeReel, closeLightbox]);

  const displayReels = reels.length > 0 ? reels : fallbackReelsData;
  const showSkeleton = status === "loading" && reels.length === 0;

  return (
    <section className="ig_reels_showcase" aria-label="SIB Infotech Instagram Reels">
      {/* Background ambient lighting effects */}
      <div className="ig_reels_glow ig_reels_glow_1" aria-hidden="true"></div>
      <div className="ig_reels_glow ig_reels_glow_2" aria-hidden="true"></div>

      <div className="containerFull">
        {/* Section Header */}
        <div className="ig_reels_header text-center">
          <div className="ig_reels_pill">
            <FaFire className="ig_reels_fire_icon" />
            <span>Trending on Instagram</span>
          </div>

          <h2 className="ig_reels_heading">
            See Us In Action On <span className="ig_gradient_text">Instagram</span>
          </h2>

          <p className="ig_reels_subtext">
            From campaign wins to behind-the-scenes moments, watch all our latest reels straight from{" "}
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ig_handle_link"
            >
              @sibinfotech
            </a>{" "}
            — fresh videos, tips, and digital celebrations every week.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="ig_reels_slider_container">
          {showSkeleton ? (
            <div className="ig_reels_skeleton_grid">
              {[1, 2, 3].map((n) => (
                <div className="ig_reel_card ig_reel_skeleton_item" key={n}>
                  <div className="ig_reel_media_wrap ig_skeleton_shimmer"></div>
                  <div className="ig_reel_caption_area">
                    <div className="ig_skeleton_line ig_skeleton_shimmer w-75 mb-2"></div>
                    <div className="ig_skeleton_line ig_skeleton_shimmer w-50"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="position-relative">
              <Swiper
                spaceBetween={20}
                loop={displayReels.length > 4}
                grabCursor={true}
                navigation={{
                  nextEl: ".ig_reels_next_btn",
                  prevEl: ".ig_reels_prev_btn",
                }}
                pagination={{ el: ".ig_reels_custom_dots", clickable: true }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                  320: { slidesPerView: 1.25, spaceBetween: 14 },
                  480: { slidesPerView: 1.6, spaceBetween: 16 },
                  768: { slidesPerView: 2.4, spaceBetween: 18 },
                  992: { slidesPerView: 3.2, spaceBetween: 20 },
                  1200: { slidesPerView: 4, spaceBetween: 22 },
                }}
                className="ig_reels_swiper"
              >
                {displayReels.map((reel, idx) => (
                  <SwiperSlide key={reel.shortcode || idx}>
                    <ReelCard reel={reel} onPlay={setActiveReel} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <button
                className="ig_reels_prev_btn ig_reels_nav_arrow"
                aria-label="Previous Reel"
                type="button"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                className="ig_reels_next_btn ig_reels_nav_arrow"
                aria-label="Next Reel"
                type="button"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              {/* Pagination Dots */}
              <div className="ig_reels_custom_dots"></div>
            </div>
          )}
        </div>

        {/* Call to Action Bar */}
        <div className="ig_reels_cta_bar text-center">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ig_follow_button"
            aria-label="Follow @sibinfotech on Instagram"
          >
            <span className="ig_follow_icon_wrap">
              <FaInstagram />
            </span>
            <span className="ig_follow_text">Follow @sibinfotech</span>
            <FaArrowRight className="ig_follow_arrow" />
          </a>
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      {activeReel && (
        <div
          className="ig_reels_modal_overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Instagram Reel Modal"
          onClick={closeLightbox}
        >
          <div
            className="ig_reels_modal_container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="ig_reels_modal_close"
              aria-label="Close modal"
              onClick={closeLightbox}
            >
              <FaTimes />
            </button>

            <div className="ig_reels_iframe_wrap">
              <iframe
                src={activeReel.embedUrl}
                title="SIB Infotech Instagram Reel"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              ></iframe>
            </div>

            <div className="ig_reels_modal_footer">
              {activeReel.caption && (
                <p className="ig_reels_modal_caption">{activeReel.caption}</p>
              )}
              <a
                href={activeReel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ig_reels_modal_external_btn"
              >
                <FaInstagram /> Open on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default InstagramReels;

