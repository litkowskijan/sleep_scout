import React from 'react';
import { useEffect } from 'react';

import About from './LandingPageComponents/About/About';
import Blog from './LandingPageComponents/Blog/Blog';
import Footer from './LandingPageComponents/Footer/Footer';
import Home from './LandingPageComponents/Home/Home';
import Navbar from './LandingPageComponents/Navbar/Navbar';
import Gallery from './LandingPageComponents/Gallery/Gallery';
import Search from './LandingPageComponents/Search/Search';
import Contact from './LandingPageComponents/Contact/Contact';

import './app.scss';

const LandingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <Home />
            <Search />
            <About />
            <Gallery />
            <Blog />
            <Contact />
            <Footer />
        </>
    );
}

export default LandingPage;