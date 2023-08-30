import React from 'react';
import Banner1 from '../components/banner1';
import SeasonCollections from '../components/seasoncollections';
import BestSeller from '../components/bestseller';
import Banner2 from '../components/banner2';
import OurProducts from '../components/ourproducts';
import Reviews from '../components/reviews';
import SignUp from '../components/signup';

const Home = () => {
  return (
    <main class='ly_main'>
      <Banner1 />
      <SeasonCollections />
      <BestSeller />
      <Banner2 />
      <OurProducts />
      <Reviews />
      <SignUp />
    </main>
  );
};

export default Home;
