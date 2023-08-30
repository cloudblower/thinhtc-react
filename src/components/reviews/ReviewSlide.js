import React from 'react';
import ReviewItem from './ReviewItem';
const ReviewSlide = ({ slide, index }) => {
  return (
    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <div className='bl_reviews_items'>
        {slide.map((review, i) => {
          return <ReviewItem key={i} review={review} />;
        })}
      </div>
    </div>
  );
};

export default ReviewSlide;
