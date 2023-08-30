import React from 'react';
import './styles.module.css';

const SignUp = () => {
  return (
    <section className='bl_signUp'>
      <div className='bl_signUp_benefits'>
        <h1 className='hp_fz-48_fw-600'>
          Get more benefits <br />
          by Sign Up & Join <br />
          Mejiwoo Community!
        </h1>
        <div className='bl_signUp_benefits_wrap'>
          <div className='bl_signUp_benefit_item'>
            <img src='assets/images/bullet.svg' alt='' />
            <h2 className='hp_fz-24_fw-600'>
              FREE Special Gift to a new member
            </h2>
          </div>
          <div className='bl_signUp_benefit_item'>
            <img src='assets/images/bullet.svg' alt='' />
            <h2 className='hp_fz-24_fw-600'>
              Get 2x JIWOO Points to purchase items
            </h2>
          </div>
          <div className='bl_signUp_benefit_item'>
            <img src='assets/images/bullet.svg' alt='' />
            <h2 className='hp_fz-24_fw-600'>
              Get special voucher code every month
            </h2>
          </div>
          <div className='bl_signUp_benefit_item'>
            <img src='assets/images/bullet.svg' alt='' />
            <h2 className='hp_fz-24_fw-600'>Claim Voucher Disc. Up To 50%</h2>
          </div>
        </div>
      </div>
      <div className='bl_signUp_options'>
        <div className='bl_signUp_form'>
          <form action='/signup'>
            <div className='bl_signUp_form_inputs'>
              <input type='text' placeholder='Full Name' />
              <input type='text' placeholder='Email Adress' />
              <input type='text' placeholder='Password' />
              <div className='bl_signUp_form_inputs_terms'>
                <input type='checkbox' />
                <label className='hp_fz-16_fw-400' for=''>
                  I agree to all the
                  <span className='hp_fz-16_fw-600'>Terms</span> and
                  <span className='hp_fz-16_fw-600'>Privacy Policy</span>
                </label>
              </div>
            </div>
            <input
              className='bl_signUp_form_submit'
              type='submit'
              value='SIGN UP'
            />
          </form>
        </div>
        <div className='bl_signUp_options_breakLine'>
          <hr />
          <span className='hp_fz-16_fw-400'>Or</span>
          <hr />
        </div>

        <div className='bl_signUp_options_thirdParties'>
          <button className='google'>
            <img src='assets/images/icon-google.svg' alt='' />
            SIGN UP WITH GOOGLE
          </button>
          <button className='facebook'>
            <img src='assets/images/icon-facebook.svg' alt='' />
            SIGN UP WITH FACEBOOK
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
