import React from 'react';
import Banner from './homeCom/Banner';
import ChooseUs from './homeCom/ChooseUs';
import HomeTypes from './homeCom/HomeTypes';
import WhyUs from './homeCom/WhyUs';
import Airports from './homeCom/Airports';
import ReviewSection from './homeCom/ReviewSection';

const Home = () => {
  return (
    <>
      <Banner />
      <ChooseUs />
      <HomeTypes />
      <WhyUs />
      <Airports />
      <ReviewSection />
    </>
  )
}

export default Home;