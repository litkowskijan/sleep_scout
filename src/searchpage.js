import React from 'react';
import Navbar2 from './SearchComponents/Navbar2/Navbar2'
import Search2 from './SearchComponents/Search2/Search2';
import Footer from './LandingPageComponents/Footer/Footer';
import { useEffect } from 'react';

const SearchPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar2 />
            <Search2 />
            <Footer />
        </>
    );
}

export default SearchPage;