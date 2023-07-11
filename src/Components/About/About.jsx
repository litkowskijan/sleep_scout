import React from 'react';
import './About.scss';
import about1 from '../../Assets/about_1.jpg'
import about2 from '../../Assets/about_2.png'

const About = () => {
    return (
        <div className='about__section' id='about'>
            <div className='about__container container'>
                <h2 className='about__title'>About us</h2>
                <div className='about__1row'>
                    <div className='about__lead__box'>
                        <p className='about__lead'> 
                            Welcome to our hotel booking platform!
                            We are dedicated to providing you with a seamless and enjoyable experience when it comes to finding and booking the perfect hotel for your travels.
                            With our user-friendly search engine, extensive database of hotels, and competitive pricing, we aim to be your go-to resource for all your accommodation needs.
                        </p>
                        <div className='about__lead__underline'></div>
                    </div>
                    <img src={about1} className='about__image' alt='about1'></img>
                </div>
                <div className='about__2row'>
                    <div className='about__lead__box'>
                        <p className='about__lead'>
                            Please note that our services are currently available in Warsaw, Berlin, and Paris.
                            However, we're constantly expanding our operations and plan to add more cities in the near future.
                            We are committed to broadening our reach to offer you a wider selection of hotels in various destinations.
                            Stay tuned for updates as we continue to grow and strive to meet your accommodation needs wherever your travels take you.
                        </p>
                        <div className='about__lead__underline'></div>
                    </div>
                    <img src={about2} className='about__image' alt='about2'></img>
                </div>
            </div>
        </div>
    );
}

export default About;
