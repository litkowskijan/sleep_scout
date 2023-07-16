import React from 'react';
import Navbar2 from './SearchComponents/Navbar2/Navbar2';
import Footer from './LandingPageComponents/Footer/Footer';
import { useEffect } from 'react';
import Blog2 from './BlogComponents/Blog2/Blog2';

const BlogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar2 />
            <Blog2 />
            <Footer />
        </div>
    );
}

export default BlogPage;