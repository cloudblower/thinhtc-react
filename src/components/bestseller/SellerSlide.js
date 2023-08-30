import React from 'react';
import SellerItem from './SellerItem';

const SlideItem = ({ slide, index }) => {
  return (
    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <div className='bl_bestSeller_item_wrap'>
        {slide.map((product, i) => {
          return <SellerItem key={i} product={product} />;
        })}
      </div>
    </div>
  );
};

export default SlideItem;
