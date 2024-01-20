import React from 'react';
import Cubes from '../images/cubes.png';

function HomeBanner() {
  return <div>
    <div className='container'>
        <div className='row' id="homebanner">
            <div className='col-8' id="homebanner-heading">
                <h1>👋 I'm Jacob Kirn, a UX Designer based in Grand Rapids, MI.</h1>
            </div>
            <div className='col-4' id="flex">
                <img id="cubes" src={Cubes} alt="cubes"/>
            </div>
        </div>
    </div>
</div>;
}

export default HomeBanner;