import React from 'react';

const CollectionItem = ({ item }) => {
  return (
    <div>
      <img className='bl_seasonCollection_item_img' src={item.image} alt='' />
      <h2 className='bl_seasonCollection_item_season hp_fz-32_fw-500'>
        {item.name}
      </h2>
      <button className='bl_seasonCollection_item_more'>MORE</button>
    </div>
  );
};

export default CollectionItem;
