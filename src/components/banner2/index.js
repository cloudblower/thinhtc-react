import React from 'react';
import './styles.module.css';

const Banner2 = () => {
  return (
    <section className='bl_banner2'>
      <img className='bl_banner2_img' src='assets/images/banner-2.png' alt='' />
      <div className='bl_banner2_txt'>
        <h1 className='hp_fz-48_fw-600'>Get 50% Off</h1>
        <h3 className='hp_fz-16_fw-400'>
          for all new product purchases <br />
          min. purchase Rp. 350.000
        </h3>
        <button>SHOP NOW</button>
      </div>
    </section>
  );
};

export default Banner2;
