import React from 'react';
import './AboutUs.css';
import abtus from './assets/abtus.jpg';
function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl
        euismod, tempus justo eget, tristique nulla. Nullam ac odio a erat
        bibendum posuere.</b>
      </p>
      <div className="image-container">
        <img className='Img' src={abtus} alt="aboutus"/>
      </div>
      <p>
        <b>Nulla facilisi. Fusce sed ex justo. Donec nec metus at erat
        sollicitudin cursus. Sed euismod fringilla justo, nec posuere massa
        interdum nec.</b>
      </p>
      <div className="review">
        <h3>Customer Reviews</h3>
        <p>
         <b> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          nisl euismod, tempus justo eget, tristique nulla."</b>
        </p>
       
      </div>
      {/* Add more reviews and content as needed */}
    </div>
  );
}

export default AboutUs;
