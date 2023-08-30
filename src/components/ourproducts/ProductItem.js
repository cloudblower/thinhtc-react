import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt='' />
      <h3 className='hp_fz-16_fw-400'>{product.name}</h3>
      <h4 className='hp_fz-14_fw-400'>{product.price}</h4>
    </div>
  );
};

export default ProductItem;
