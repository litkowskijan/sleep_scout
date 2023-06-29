import React from 'react';

import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Offers from './Components/Offers/Offers';
import Popular from './Components/Popular/Popular';
import Search from './Components/Search/Search';

import './app.scss';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Search />
            <Popular />
            <Offers />
            <About />
            <Blog />
            <Footer />
        </>
    );
}

export default App;