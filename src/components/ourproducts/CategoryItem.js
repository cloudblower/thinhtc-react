import React from 'react';

const CategoryItem = ({ category, index }) => {
  return (
    <h2
      className={`bl_ourProducts_category_item ${index === 0 ? 'active' : ''}`}
    >
      {category.name}
    </h2>
  );
};

export default CategoryItem;
