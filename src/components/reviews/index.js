import React from 'react';
import ReviewSlide from './ReviewSlide';
import { SlideData } from '../../data/reviews';

const Reviews = () => {
  return (
    <section className='bl_reviews'>
      <h1 className='hp_primaryHeading'>What They Said</h1>
      <div id='review-slide' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>
          {SlideData.map((slide, i) => {
            return <ReviewSlide key={i} slide={slide} index={i} />;
          })}
        </div>
        <a
          className='carousel-control-prev'
          href='#review-slide'
          role='button'
          data-slide='prev'
        >
          <span className='bl_reviews_prevController'>
            <img src='assets/images/review-control-prev.svg' alt='' />
          </span>
        </a>
        <a
          className='carousel-control-next'
          href='#review-slide'
          role='button'
          data-slide='next'
        >
          <span className='bl_reviews_nextController'>
            <img src='assets/images/review-control-next.svg' alt='' />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Reviews;
