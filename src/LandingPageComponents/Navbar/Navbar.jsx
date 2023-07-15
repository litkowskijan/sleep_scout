import React, { useState } from 'react';
import { VscMenu, VscClose } from 'react-icons/vsc';
import { Link } from 'react-scroll';

const Navbar = () => {
    
    //-----HamburgerVisibility-----
    const [HamburgerPosition, setHamburgerPosition] = useState('navbar__hamburger left_500')

    const showHamburger = () => {
        setHamburgerPosition('navbar__hamburger left_0')
    }

    const hideHamburger = () => {
        setHamburgerPosition('navbar__hamburger left_500')
    }
    //-----HamburgerVisibility-----

    //-----NavbarBackground-----
    const [transparent, setTransparent] = useState('navbar__section')

    const addColor = () => {
        if(window.scrollY >= 10) {
            setTransparent('navbar__section navbar__color')
        }
        else {
            setTransparent('navbar__section')
        }
    }

    window.addEventListener('scroll', addColor)
    //-----NavbarBackground-----

    return (
        <section className={transparent}>
            <div className='navbar__container container'>
                <h1 className='navbar__logo'>Sleep Scout</h1>
                <VscMenu onClick={showHamburger} className='navbar__hamburger__icon'/>
            </div>
            <div className={HamburgerPosition}>                    
                    <ul className='navbar__menu'>
                        <VscClose onClick={hideHamburger} className='navbar__hamburger__exit'/>
                        <li><Link to='home' smooth={true} spy={true} className='navbar__menu__el' onClick={hideHamburger}>Home</Link></li>
                        <li><Link to='about' smooth={true} spy={true} offset={-30} className='navbar__menu__el' onClick={hideHamburger}>About</Link></li>
                        <li><Link to='gallery' smooth={true} spy={true} offset={-50} className='navbar__menu__el' onClick={hideHamburger}>Gallery</Link></li>
                        <li><Link to='blog' smooth={true} spy={true} offset={-50} className='navbar__menu__el' onClick={hideHamburger}>Blog</Link></li>
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

export default Navbar;