import React from 'react';

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
          <div className='carousel-item active'>
            <div className='bl_bestSeller_item_wrap'>
              <div>
                <img src='assets/images/bseller-item1.png' alt='' />
                <h3 className='hp_fz-16_fw-400'>Euphoria Crop Blouse</h3>
                <h4 className='hp_fz-14_fw-400'>Rp. 125.000</h4>
              </div>
              <div>
                <img src='assets/images/bseller-item2.png' alt='' />
                <h3 className='hp_fz-16_fw-400'>Venus Halter Dress</h3>
                <h4 className='hp_fz-14_fw-400'>Rp. 180.000</h4>
              </div>
              <div>
                <img src='assets/images/bseller-item3.png' alt='' />
                <h3 className='hp_fz-16_fw-400'>Snap Pure Blouse</h3>
                <h4 className='hp_fz-14_fw-400'>Rp. 129.000</h4>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='bl_bestSeller_item_wrap'>
              <div>
                <img src='assets/images/bseller-item4.png' alt='' />
                <h3 className='hp_fz-16_fw-400'>West Bootscut Denim</h3>
                <h4 className='hp_fz-14_fw-400'>Rp. 229.000</h4>
              </div>
              <div>
                <img src='assets/images/bseller-item5.png' alt='' />
                <h3 className='hp_fz-16_fw-400'>Ribbon Check Long</h3>
                <h4 className='hp_fz-14_fw-400'>Rp. 175.000</h4>
              </div>
              <div>
                <img src='assets/images/bseller-item6.png' alt='' />
                <h3 className='hp_fz-16_fw-400'>Shouldcut Knit</h3>
                <h4 className='hp_fz-14_fw-400'>Rp. 149.000</h4>
              </div>
            </div>
          </div>
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
