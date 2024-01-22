import React from 'react';
import './Main.css';
import fiveStar from '../../assets/5star-rating.png';
import fourStar from '../../assets/4-5star-rating.png';
import lance from '../../assets/lance.png';
import debo from '../../assets/Deborah.png';
import laura from '../../assets/Lauren.png';
import tom from '../../assets/Tom1.png';

const MainTestimonials = () => {
  return (
    <div className='testimonials-container'>
      <section className='testimonials'>
        <h1 className='testimonials-title'>Testimonials</h1>
        <div className='rating-card-container'>
          <div className='rating-card'>
            <img className='rating' src={fiveStar} alt='5 star rating' />
            <div className='profile-pic-name'>
              <img
                className='profile-pic'
                src={lance}
                alt='a men with his dog'
              />
              <h1 className='profile-name'>Lance H.</h1>
            </div>
            <p className='review'>
              “ I really liked the food. It was delicious. Certainly, I will
              visit again.”
            </p>
          </div>
          <div className='rating-card'>
            <img className='rating' src={fourStar} alt='4.5 star rating' />
            <div className='profile-pic-name'>
              <img className='profile-pic' src={debo} alt='a woman' />
              <h1 className='profile-name'>Deborah J.</h1>
            </div>
            <p className='review'>
              “Good restaurant. You should try lemon dessert.”
            </p>
          </div>
          <div className='rating-card'>
            <img className='rating' src={fiveStar} alt='5 star rating' />
            <div className='profile-pic-name'>
              <img className='profile-pic' src={laura} alt='a woman' />
              <h1 className='profile-name'>Lauren L.</h1>
            </div>
            <p className='review'>
              “Service was quick. We had a tasty dinner with my friend.”
            </p>
          </div>
          <div className='rating-card'>
            <img className='rating' src={fiveStar} alt='5 star rating' />
            <div className='profile-pic-name'>
              <img className='profile-pic' src={tom} alt='a men with his dog' />
              <h1 className='profile-name'>Tom B.</h1>
            </div>
            <p className='review'>
              “Friendly and helpful people. Nice outdoor tables. Good food.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainTestimonials;
