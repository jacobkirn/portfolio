import React from 'react';
import Cubes from '../images/cubes.png';
import Boxes from '../images/noun-boxes-318550-1.png';
import { HiMiniArrowLongRight } from "react-icons/hi2";

function HomeBanner() {
    return <div>
        <div className='container'>
        <img id="boxes" src={Boxes} alt="boxes" />
            <div className='row' id="homebanner">
                <div className='col-8' id="homebanner-heading">
                    <h1 id="d">👋 I'm Jacob Kirn, a UX Designer based in Grand Rapids, MI.</h1>
                    <h1 id="m">👋 I'm Jacob Kirn, a UX Designer based in Grand Rapids.</h1>
                    <button>View Portfolio <HiMiniArrowLongRight /></button>
                </div>
                <div className='col-4' id="flex">
                    <img id="cubes" src={Cubes} alt="cubes" />
                </div>
            </div>
        </div>
    </div>;
}

export default HomeBanner;