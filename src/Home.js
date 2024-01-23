import React from 'react';
import HomeBanner from './components/HomeBanner';
import Profile from './components/Profile';
import ProfileBanner from './components/PortfolioBanner';
import RabbitHole from './components/RabbitHole';

function Home() {
  return <div>
    <div>
      <HomeBanner />
      <Profile />
      <ProfileBanner />
      <div id="d">
        <RabbitHole />
      </div>
    </div>
  </div>;
}

export default Home;
