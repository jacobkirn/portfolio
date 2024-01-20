import React from 'react';
import { FaRegFolderOpen } from "react-icons/fa";
import StyleCoHomeBanner from './StyleCoHomeBanner.js';


function ProfileBanner() {
  return <div>
        <section id="portfolio-section">
            <div className='container'>
                {/* <div className='row' id="mb-40">
                    <div id="align-center">
                        <FaRegFolderOpen id="profile-icon"/>
                        <h2 id="profile-heading">Recent Projects</h2>
                    </div>
                </div> */}
            </div>
            <div>
                <StyleCoHomeBanner />
            </div>
            
        </section>
    </div>;
}

export default ProfileBanner;