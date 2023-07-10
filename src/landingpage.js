import React from 'react';
import { useEffect } from 'react';

import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Gallery from './Components/Gallery/Gallery';
import Search from './Components/Search/Search';
import Contact from './Components/Contact/Contact';

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