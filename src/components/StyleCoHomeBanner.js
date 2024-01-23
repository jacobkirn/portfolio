import React, { useRef, useEffect } from 'react';
import Phones from '../videos/phone_animation_styleco.mp4';
import { HiMiniArrowLongRight } from "react-icons/hi2";

function StyleCoHomeBanner() {
  const videoRef = useRef(null);
  const preventBehavior = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // When the component mounts, try to play the video
    const playVideo = async () => {
      try {
        await videoRef.current.play();
      } catch (err) {
        console.error("Video play failed", err);
      }
    };

    playVideo();
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <h4 id="mb-20">UX/UI</h4>
          <h2 id="mb-20">AR Fitting Room for StyleCo</h2>
          <button>Case Study <HiMiniArrowLongRight /></button>
        </div>
        <div className='col-4' id="flex">
          <div className="video-container">
            <video
              ref={videoRef}
              src={Phones}
              muted
              playsInline
              loop
              autoPlay
              preload="auto"
              onClick={preventBehavior}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleCoHomeBanner;
