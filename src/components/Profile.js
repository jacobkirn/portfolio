import React from 'react';
import MovingBike from './MovingScene';
import { FaRegUserCircle } from "react-icons/fa";

function Profile() {
  return <div>
        <section id="profile-section">
            <div className='container'>
                <div className='row' id="mb-40">
                    <div id="align-center">
                        <FaRegUserCircle id="profile-icon"/>
                        <h2 id="profile-heading">Profile</h2>
                    </div>
                </div>
                <div className='row'>
                    <h3>User Experience graduate student at Michigan State University. <br />Currently solving warehouse automation problems at Dematic. <br />Practiced in design, development, and documentation. <br />Interested in all sorts of creative things.</h3>
                </div>
            </div>
            <div>
                <MovingBike />
                </div>
        </section>
    </div>;
}

export default Profile;
