import React from 'react';
import Banner1 from '../components/Banner1';
import SeasonCollection from '../components/SeasonCollection';
import BestSeller from '../components/BestSeller';
import Banner2 from '../components/Banner2';
import OurProducts from '../components/OurProducts';
import Reviews from '../components/Reviews';
import SignUp from '../components/SignUp';

const Landing = () => {
  return (
    <main class='ly_main'>
      <Banner1 />
      <SeasonCollection />
      <BestSeller />
      <Banner2 />
      <OurProducts />
      <Reviews />
      <SignUp />
    </main>
  );
};

export default Landing;
