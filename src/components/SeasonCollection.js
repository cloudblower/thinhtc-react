import React from 'react';

const SeasonCollection = () => {
  return (
    <section className='bl_seasonCollection'>
      <h1 className='hp_primaryHeading'>Season Collections</h1>
      <div className='bl_seasonCollection_item'>
        <div>
          <img
            className='bl_seasonCollection_item_img'
            src='assets/images/collection-item1.png'
            alt=''
          />
          <h2 className='bl_seasonCollection_item_season hp_fz-32_fw-500'>
            SPRING
          </h2>
          <button className='bl_seasonCollection_item_more'>MORE</button>
        </div>
        <div>
          <img
            className='bl_seasonCollection_item_img'
            src='assets/images/collection-item2.png'
            alt=''
          />
          <h2 className='bl_seasonCollection_item_season hp_fz-32_fw-500'>
            SUMMER
          </h2>
          <button className='bl_seasonCollection_item_more'>MORE</button>
        </div>
        <div>
          <img
            className='bl_seasonCollection_item_img'
            src='assets/images/collection-item3.png'
            alt=''
          />
          <h2 className='bl_seasonCollection_item_season hp_fz-32_fw-500'>
            WINTER
          </h2>
          <button className='bl_seasonCollection_item_more'>MORE</button>
        </div>
      </div>
    </section>
  );
};

export default SeasonCollection;
