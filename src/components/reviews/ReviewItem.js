import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div>
      <img className='bl_reviews_item_img' src={review.image} alt='' />
      <h3 className='hp_fz-16_fw-400'>{review.name}</h3>
      <img
        src='assets/images/five-rating.png'
        alt=''
        className='bl_reviews_item_rating'
      />
      <h4 className='bl_reviews_item_customer hp_fz-14_fw-400'>
        {review.user}
      </h4>
      <h4 className='bl_reviews_item_descr hp_fz-14_fw-400'>
        {review.description}
      </h4>
    </div>
  );
};

export default ReviewItem;
