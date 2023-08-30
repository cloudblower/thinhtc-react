import React from 'react';
import './styles.module.css';

const Banner1 = () => {
  return (
    <section className='bl_banner1'>
      <img className='bl_banner_img' src='assets/images/banner-1.png' alt='' />
      <div className='bl_banner1_txt'>
        <div className='bl_banner1_ttl'>
          <h1 className='hp_fz-48_fw-600'>MEJIWOO</h1>
          <h2 className='hp_fz-32_fw-500'>미지우</h2>
        </div>

        <div className='bl_banner1_breakLine'></div>

        <h3 className='hp_fz-16_fw-400'>
          make your everyday look prettier <br />
          with MEJIWOO Korean Made
        </h3>
      </div>
    </section>
  );
};

export default Banner1;
