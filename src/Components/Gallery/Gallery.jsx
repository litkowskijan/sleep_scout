import React from 'react';

const Gallery = () => {
    return (
        <div className='gallery__section' id='gallery'>
            <div className='gallery__container container'>
                <h2 className='gallery__title'>Gallery</h2>
                <div className='gallery__img__box'>
                    <img className='gallery__img img1' src='https://i.imgur.com/7dwhuWR.jpg' alt='about1'></img>
                    <img className='gallery__img img2' src='https://i.imgur.com/ICyCwfM.jpg' alt='about1'></img>
                    <img className='gallery__img img3' src='https://i.imgur.com/wWhLbd0.jpg' alt='about1'></img>
                    <img className='gallery__img img4' src='https://i.imgur.com/OrEB7sB.jpg' alt='about1'></img>
                </div>
                <button className='gallery__button'>View more</button>
            </div>
        </div>
    );
}

export default Gallery;
