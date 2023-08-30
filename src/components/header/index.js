import React from 'react';
import './styles.module.css';

const header = () => {
  return (
    <header className='ly_header'>
      <ul className='bl_navBar hp_fz-14_fw-400'>
        <li href='' className='bl_navBar_navItem active'>
          Home
        </li>
        <li href='' className='bl_navBar_navItem'>
          Product
        </li>
        <li href='' className='bl_navBar_navItem'>
          Categories
        </li>
        <li href='' className='bl_navBar_navItem'>
          SALE
        </li>
      </ul>
      <a href='' className='bl_headerLogo'>
        <img src='assets/images/logo.svg' alt='' />
      </a>
      <div className='bl_toolBar'>
        <div className='bl_toolBar_searchBox' place>
          <input
            type='text'
            className='bl_toolBar_searchBox_searchText hp_fz-14_fw-400'
            placeholder='Search'
          />
          <img
            src='assets/images/search.svg'
            alt=''
            className='bl_toolBar_searchBox_searchIcon'
          />
        </div>
        <a href='' className=''>
          <img
            className='bl_toolBar_cartIcon'
            src='assets/images/cart.svg'
            alt=''
          />
        </a>
        <a href='' className=''>
          <img src='assets/images/user.svg' alt='' />
        </a>
      </div>
    </header>
  );
};

export default header;
