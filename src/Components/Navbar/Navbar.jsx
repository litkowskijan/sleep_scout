import React, { useState } from 'react';
import { VscMenu, VscClose } from 'react-icons/vsc';

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

    return (
        <section className='navbar__section'>
            <div className='navbar__container container'>
                <h1 className='navbar__logo'>Sleep Scout</h1>
                <VscMenu onClick={showHamburger} className='navbar__hamburger__icon'/>
            </div>
            <div className={HamburgerPosition}>                    
                    <ul className='navbar__menu'>
                        <VscClose onClick={hideHamburger} className='navbar__hamburger__exit'/>
                        <li className='navbar__menu__el'>Home</li>
                        <li className='navbar__menu__el'>Products</li>
                        <li className='navbar__menu__el'>Resources</li>
                        <li className='navbar__menu__el'>Contact</li>
                        <li className='navbar__menu__el'>Blog</li>
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