import React from 'react';

const OurProducts = () => {
  return (
    <section className='bl_ourProducts'>
      <h1 className='hp_primaryHeading'>Our Products</h1>
      <div className='bl_ourProducts_categories hp_fz-32_fw-500'>
        <h2 className='bl_ourProducts_category_item active'>Top</h2>
        <h2 className='bl_ourProducts_category_item'>Bottom</h2>
        <h2 className='bl_ourProducts_category_item'>Dress</h2>
        <h2 className='bl_ourProducts_category_item'>Set</h2>
        <h2 className='bl_ourProducts_category_item'>Knit</h2>
        <h2 className='bl_ourProducts_category_item'>Outer</h2>
      </div>
      <div className='bl_ourProducts_items'>
        <div className='bl_ourProducts_items_wrap'>
          <div>
            <img src='assets/images/our-product1.png' alt='' />
            <h3 className='hp_fz-16_fw-400'>Eto V Neck Yellow</h3>
            <h4 className='hp_fz-14_fw-400'>Rp. 129.000</h4>
          </div>
          <div>
            <img src='assets/images/our-product2.png' alt='' />
            <h3 className='hp_fz-16_fw-400'>Macaroon Dry Half</h3>
            <h4 className='hp_fz-14_fw-400'>Rp. 139.000</h4>
          </div>
          <div>
            <img src='assets/images/our-product3.png' alt='' />
            <h3 className='hp_fz-16_fw-400'>Wave Stripe Hally</h3>
            <h4 className='hp_fz-14_fw-400'>Rp. 130.000</h4>
          </div>
          <div>
            <img src='assets/images/our-product4.png' alt='' />
            <h3 className='hp_fz-16_fw-400'>Eve Punching Floral</h3>
            <h4 className='hp_fz-14_fw-400'>Rp. 229.000</h4>
          </div>
          <div>
            <img src='assets/images/our-product5.png' alt='' />
            <h3 className='hp_fz-16_fw-400'>Floral Waffle Tee</h3>
            <h4 className='hp_fz-14_fw-400'>Rp. 119.000</h4>
          </div>
          <div>
            <img src='assets/images/our-product6.png' alt='' />
            <h3 className='hp_fz-16_fw-400'>Snap Pure Blouse</h3>
            <h4 className='hp_fz-14_fw-400'>Rp. 225.000</h4>
          </div>
        </div>
        <button className='bl_ourProducts_items_more'>
          <div className='hp_fz-20_fw-400'>SEE MORE</div>
          <img src='assets/images/see-more-next.svg' alt='' />
        </button>
      </div>
    </section>
  );
};

export default OurProducts;
