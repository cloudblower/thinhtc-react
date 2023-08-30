import React from 'react';
import CollectionItem from './CollectionItem';
import { collectionData } from '../../data/seasoncollections';

const SeasonCollections = () => {
  return (
    <section className='bl_seasonCollection'>
      <h1 className='hp_primaryHeading'>Season Collections</h1>
      <div className='bl_seasonCollection_item'>
        {collectionData.map((item, i) => {
          return <CollectionItem key={i} item={item} />;
        })}
      </div>
    </section>
  );
};

export default SeasonCollections;
