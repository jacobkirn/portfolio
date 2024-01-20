import React from 'react';
import { FaRegFolderOpen } from "react-icons/fa";

function ProfileBanner() {
  return <div>
        <section id="portfolio-section">
            <div className='container'>
                <div className='row' id="mb-40">
                    <div id="align-center">
                        <FaRegFolderOpen id="profile-icon"/>
                        <h2 id="profile-heading">Portfolio</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default ProfileBanner;