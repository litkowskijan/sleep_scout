import React from 'react';
import { IoMdHome, IoMdMail } from 'react-icons/io'
import { BsFillPhoneFill } from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='contact__section' id='contact'>
            <div className='contact__container container'>
                <h2 className='contact__title'>Get in touch</h2>
                <div className='contact__box'>
                    <div className='contact__form'>
                        <div className='contact__form__1row'>
                            <input className='name__input' placeholder='Name'></input>
                            <input className='mail__input' placeholder='E-mail'></input>
                        </div>
                        <input className='subject__input' placeholder='Subject'></input>
                        <textarea className='message__input' placeholder='Message'></textarea>
                    </div>
                    <div className='contact__info'>
                        <div className='info__address'>
                            <IoMdHome className='info__address__icon'/>
                            <div className='info__address__text'>2162 Union St | 94123 | San&nbsp;Francisco</div>
                        </div>
                        <div className='info__email'>
                            <IoMdMail className='info__email__icon'/>
                            <div className='info__email__text'>support@sleepscout.com</div>
                        </div>
                        <div className='info__number'>
                            <BsFillPhoneFill className='info__number__icon'/>
                            <div className='info__number__text'>(415) 928-8944</div>
                        </div>
                    </div>
                </div>
                <button className='contact__button'>Send</button>
            </div>
        </div>
    );
}

export default Contact;