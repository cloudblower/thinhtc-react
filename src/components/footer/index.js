import React from 'react';
import './styles.module.css';

const Footer = () => {
  return (
    <footer className='ly_footer'>
      <div className='bl_footer_information'>
        <div className='bl_logo_wrap'>
          <img src='assets/images/footer-logo.svg' alt='' />
        </div>
        <div className='bl_aboutUs'>
          <div className='bl_footer_heading hp_fz-16_fw-600'>About Us</div>
          <div className='bl_footer_links hp_fz-16_fw-400'>
            <a className='hp_fz-16_fw-400' href=''>
              News
            </a>
            <a className='hp_fz-16_fw-400' href=''>
              Official Store
            </a>
            <a className='hp_fz-16_fw-400' href=''>
              Company
            </a>
            <a className='hp_fz-16_fw-400' href=''>
              Careers
            </a>
          </div>
        </div>
        <div className='bl_getHelp'>
          <div className='bl_footer_heading hp_fz-16_fw-600'>Get Help</div>
          <div className='bl_footer_links'>
            <a className='hp_fz-16_fw-400' href=''>
              FAQ
            </a>
            <a className='hp_fz-16_fw-400' href=''>
              Shipping
            </a>
            <a className='hp_fz-16_fw-400' href=''>
              Payment
            </a>
            <a className='hp_fz-16_fw-400' href=''>
              Returns
            </a>
            <a className='hp_fz-16_fw-400' href=''>
              Contact Us
            </a>
          </div>
        </div>
        <div className='bl_followUs'>
          <div className='bl_footer_heading hp_fz-16_fw-600'>Follow Us</div>
          <div className='bl_followUs_socialMedia'>
            <a className='bl_followUs_socialMedia_item' href=''>
              <img src='assets/images/footer-facebook.svg' alt='' />
            </a>
            <a className='bl_followUs_socialMedia_item' href=''>
              <img src='assets/images/footer-intagram.svg' alt='' />
            </a>
            <a className='bl_followUs_socialMedia_item' href=''>
              <img src='assets/images/footer-twitter.svg' alt='' />
            </a>
            <a className='bl_followUs_socialMedia_item' href=''>
              <img src='assets/images/footer-youtuber.svg' alt='' />
            </a>
          </div>
        </div>
        <div className='bl_rules'>
          <div className='bl_rule_items'>
            <a className='hp_fz-16_fw-600' href=''>
              Guide
            </a>
            <a className='hp_fz-16_fw-600' href=''>
              Terms & Conditions
            </a>
            <a className='hp_fz-16_fw-600' href=''>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className='bl_footer_copyright'>
        <img src='assets/images/footer-copyright.svg' alt='' />
        <div className='hp_fz-16_fw-400'>2023 MEJIWOO. All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
