import React from 'react';
import SlideItem from './SellerSlide';
import { sellerData } from '../../data/bestseller';

const BestSeller = () => {
  return (
    <section className='bl_bestSeller'>
      <h1 className='hp_primaryHeading'>Our Best Seller</h1>
      <div
        id='best-seller-slide'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          {sellerData.map((slide, i) => {
            return <SlideItem key={i} slide={slide} index={i} />;
          })}
        </div>
        <a
          className='carousel-control-prev'
          href='#best-seller-slide'
          role='button'
          data-slide='prev'
        >
          <span className='bl_bestSeller_prevController'>
            <img src='assets/images/best-seller-control-prev.svg' alt='' />
          </span>
        </a>
        <a
          className='carousel-control-next'
          href='#best-seller-slide'
          role='button'
          data-slide='next'
        >
          <span className='bl_bestSeller_nextController'>
            <img src='assets/images/best-seller-control-next.svg' alt='' />
          </span>
        </a>
      </div>
    </section>
  );
};

export default BestSeller;
