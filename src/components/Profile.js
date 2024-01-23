import React from 'react';
import MovingBike from './MovingScene';

function Profile() {
  return <div>
        <section id="profile-section">
            <div className='container'>
                <div className='row' id="mb-20">
                    <div id="align-center">
                        <h2 id="profile-heading">Profile</h2>
                    </div>
                </div>
                <div className='row' id="profile-text-m">
                    <h3>User Experience graduate student at Michigan State University.</h3>
                    <h3>Currently solving warehouse automation problems at <a href="https://www.dematic.com/" target='_blank' rel="noreferrer">Dematic</a>.</h3> 
                    <h3>Practiced in design, development, and documentation.</h3>
                    <h3>Interested in all sorts of creative things.</h3>
                </div>
                <div className='row' id="profile-text-d">
                    <h3>User Experience graduate student at Michigan State University. <br />Currently solving warehouse automation problems at <a href="https://www.dematic.com/" target='_blank' rel="noreferrer">Dematic</a>. <br />Practiced in design, development, and documentation. <br />Interested in all sorts of creative things.</h3>
                </div>
            </div>
            <div>
                <MovingBike />
                </div>
        </section>
    </div>;
}

export default Profile;
