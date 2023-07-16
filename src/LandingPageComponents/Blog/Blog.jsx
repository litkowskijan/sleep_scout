import React from 'react';
import BlogImage from '../../Assets/blog_pic.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='blog__section' id='blog'>
            <div className='blog__container container'>
                <h2 className='blog__title'>Blog</h2>
                <div className='blog__box'>
                    <img className='blog__box__image' src={BlogImage} alt='blog'></img>
                    <h3 className='blog__box__title'>Journey Diaries: Inspiring Travel Tales from Around the Globe</h3>
                    <p className='blog__box__lead'>
                        Brace yourself for an exciting adventure as we take you on a captivating journey through breathtaking landscapes, vibrant cultures, and unforgettable experiences.
                        Welcome to Journey Diaries, a blog that will ignite your wanderlust and fuel your desire to explore the world.
                        Join us as we share inspiring travel tales, insider tips, and stunning visuals that will transport you to distant destinations and inspire your next expedition.
                        Whether you're a seasoned globetrotter or an aspiring explorer, this blog is your gateway to a world of wanderlust.
                        Get ready to embark on an extraordinary voyage through our virtual travel journal and let your imagination soar.
                    </p>
                </div>
                <Link to='/blogpage' className='blog__button'>Blog</Link>
            </div>
        </div>
    );
}

export default Blog;
