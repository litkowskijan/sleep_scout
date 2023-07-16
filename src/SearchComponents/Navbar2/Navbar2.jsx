import React, { useState } from 'react';
import { VscMenu, VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Navbar2 = () => {

    const [HamburgerPosition, setHamburgerPosition] = useState('navbar__hamburger left_500')

    const showHamburger = () => {
        setHamburgerPosition('navbar__hamburger left_0')
    }

    const hideHamburger = () => {
        setHamburgerPosition('navbar__hamburger left_500')
    }

    return (
        <section className='navbar__section2'>
            <div className='navbar__container container'>
                <h1 className='navbar__logo'>Sleep Scout</h1>
                <VscMenu onClick={showHamburger} className='navbar__hamburger__icon'/>
            </div>
            <div className={HamburgerPosition}>                    
                <ul className='navbar__menu'>
                    <VscClose onClick={hideHamburger} className='navbar__hamburger__exit'/>
                    <li><Link to='/' className='navbar__menu__el'>Home</Link></li>
                    <li className='navbar__menu__el'>About</li>
                    <li className='navbar__menu__el'>Gallery</li>
                    <li><Link to='/blogpage' className='navbar__menu__el'>Blog</Link></li>
                    <li className='navbar__menu__el'>Contact</li>
                </ul>
                <div className='navbar__buttons'>
                        <button className='navbar__btn btn__login'>Log in</button>
                        <button className='navbar__btn btn__signup'>Sign up</button>
                </div>
            </div>
        </section>
    );
}

export default Navbar2;
