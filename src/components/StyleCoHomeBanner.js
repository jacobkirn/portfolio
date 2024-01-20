import React from 'react';
import Phones from '../videos/phone_animation_styleco.mp4';
import { HiMiniArrowLongRight } from "react-icons/hi2";

function StyleCoHomeBanner() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <h4 id="mb-20">UX/UI</h4>
          <h2 id="mb-20">AR Fitting Room for StyleCo</h2>
          <button>Case Study <HiMiniArrowLongRight /></button>
        </div>
        <div className='col-4' >
          <div className="video-container" id="flex">
            <video src={Phones} muted loop autoPlay style={{ width: '80%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleCoHomeBanner;
