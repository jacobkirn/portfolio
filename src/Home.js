import React from 'react';
import HomeBanner from './components/HomeBanner';
import Profile from './components/Profile';
import ProfileBanner from './components/PortfolioBanner';

function Home() {
  return <div>
    <div>
        <HomeBanner />
        <Profile />
        <ProfileBanner />
    </div>
</div>;
}

export default Home;
