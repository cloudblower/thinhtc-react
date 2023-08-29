import React from 'react';

const Reviews = () => {
  return (
    <section className='bl_reviews'>
      <h1 className='hp_primaryHeading'>What They Said</h1>
      <div id='review-slide' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='bl_reviews_items'>
              <div>
                <img
                  className='bl_reviews_item_img'
                  src='assets/images/review-item1.png'
                  alt=''
                />
                <h3 className='hp_fz-16_fw-400'>Essence Long Denim</h3>
                <img
                  src='assets/images/five-rating.png'
                  alt=''
                  className='bl_reviews_item_rating'
                />
                <h4 className='bl_reviews_item_customer hp_fz-14_fw-400'>
                  -Lisa-
                </h4>
                <h4 className='bl_reviews_item_descr hp_fz-14_fw-400'>
                  “I like this pants. Its fit and perfect for me. The material
                  is so comfortable that it can be used anywhere. It is also
                  suitable to be combined with all types of my clothes.”
                </h4>
              </div>
              <div>
                <img
                  className='bl_reviews_item_img'
                  src='assets/images/review-item2.png'
                  alt=''
                />
                <h3 className='hp_fz-16_fw-400'>Andcable Knit Top</h3>
                <img
                  src='assets/images/five-rating.png'
                  alt=''
                  className='bl_reviews_item_rating'
                />
                <h4 className='bl_reviews_item_customer hp_fz-14_fw-400'>
                  -Celine-
                </h4>
                <h4 className='bl_reviews_item_descr hp_fz-14_fw-400'>
                  “I like knitted materials. I bought this shirt because the
                  design is very pretty and comfortable to wear casually. The
                  material is also neat and good. I love shopping here and I’ll
                  be a frequent customer at this store.”
                </h4>
              </div>
              <div>
                <img
                  className='bl_reviews_item_img'
                  src='assets/images/review-item3.png'
                  alt=''
                />
                <h3 className='hp_fz-16_fw-400'>Candy Stripe Boxy</h3>
                <img
                  src='assets/images/five-rating.png'
                  alt=''
                  className='bl_reviews_item_rating'
                />
                <h4 className='bl_reviews_item_customer hp_fz-14_fw-400'>
                  -Tiffany-
                </h4>
                <h4 className='bl_reviews_item_descr hp_fz-14_fw-400'>
                  “This shirt is very pretty and nice. The color is cute too. At
                  first I bought it as a present for my friend but I also wanted
                  it so we ended up going out wearing twin clothes haha.”
                </h4>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='bl_reviews_items'>
              <div>
                <img
                  className='bl_reviews_item_img'
                  src='assets/images/review-item4.png'
                  alt=''
                />
                <h3 className='hp_fz-16_fw-400'>Summer Cheese Slacks</h3>
                <img
                  src='assets/images/five-rating.png'
                  alt=''
                  className='bl_reviews_item_rating'
                />
                <h4 className='bl_reviews_item_customer hp_fz-14_fw-400'>
                  -Mona-
                </h4>
                <h4 className='bl_reviews_item_descr hp_fz-14_fw-400'>
                  “This pants are very comfortable to wear in the office all
                  day. The material is breathable and stretchy. I also bought
                  this cardigan because I like the beautiful pattern. It goes
                  very well with the pants.”
                </h4>
              </div>
              <div>
                <img
                  className='bl_reviews_item_img'
                  src='assets/images/review-item5.png'
                  alt=''
                />
                <h3 className='hp_fz-16_fw-400'>Tinkerbell Chiffon Skirt</h3>
                <img
                  src='assets/images/five-rating.png'
                  alt=''
                  className='bl_reviews_item_rating'
                />
                <h4 className='bl_reviews_item_customer hp_fz-14_fw-400'>
                  -Hana-
                </h4>
                <h4 className='bl_reviews_item_descr hp_fz-14_fw-400'>
                  “I bought this one set of this pretty cardigan and skirt. I
                  really like the Korean style. It's very trendy and comfortable
                  to use when hanging out. I’m happy to be a regular customer at
                  this store.”
                </h4>
              </div>
              <div>
                <img
                  className='bl_reviews_item_img'
                  src='assets/images/review-item6.png'
                  alt=''
                />
                <h3 className='hp_fz-16_fw-400'>Sweet Serendipity Cardigan</h3>
                <img
                  src='assets/images/five-rating.png'
                  alt=''
                  className='bl_reviews_item_rating'
                />
                <h4 className='bl_reviews_item_customer hp_fz-14_fw-400'>
                  -Bella-
                </h4>
                <h4 className='bl_reviews_item_descr hp_fz-14_fw-400'>
                  “I really like this cardigan. I like the material because its
                  very soft and comfortable to use. I also bought 2 different
                  colors because they are really good to use and pretty.”
                </h4>
              </div>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#review-slide'
          role='button'
          data-slide='prev'
        >
          <span className='bl_reviews_prevController'>
            <img src='assets/images/review-control-prev.svg' alt='' />
          </span>
        </a>
        <a
          className='carousel-control-next'
          href='#review-slide'
          role='button'
          data-slide='next'
        >
          <span className='bl_reviews_nextController'>
            <img src='assets/images/review-control-next.svg' alt='' />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Reviews;
