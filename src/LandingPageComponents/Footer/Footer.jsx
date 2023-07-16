import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer__section'>
            <div className='footer__container container'>
                <div className='footer__1stpart'>
                    <h2 className='footer__logo'>Sleep Scout</h2>
                    <p className='footer__lead'>
                        Unforgettable journeys.
                        Extraordinary destinations.
                        Curated accommodations.
                        Let us guide your remarkable voyage.
                        Start today!
                    </p>
                </div>
                <div className='footer__2ndpart'>
                    <span className='footer__links__title'>Links:</span>
                    <ul className='footer__links'>
                        <li><Link to='/' className='footer__link'>Home</Link></li>
                        <li><Link to='/' className='footer__link'>About</Link></li>
                        <li><Link to='/' className='footer__link'>Gallery</Link></li>
                        <li><Link to='/blogpage' className='footer__link'>Blog</Link></li>
                        <li><Link to='/' className='footer__link'>Contact</Link></li>
                    </ul>
                </div>
                <div className='footer__3rdpart'>
                    <div className='footer__number'>(415) 928-8944</div>
                    <div className='footer__email'>info@sleepscout.com</div>
                    <div className='footer__socials'>
                        <a href='https://facebook.com/' target='_blank' rel="noreferrer"><FaFacebookSquare className='footer__social__icon' /></a>
                        <a href='https://instagram.com/' target='_blank' rel="noreferrer"><FaInstagramSquare className='footer__social__icon' /></a>
                        <a href='https://youtube.com/' target='_blank' rel="noreferrer"><FaYoutube className='footer__social__icon' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;