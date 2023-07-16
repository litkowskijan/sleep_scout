import React, { useState } from 'react';
import { IoMdHome, IoMdMail } from 'react-icons/io'
import { BsFillPhoneFill } from 'react-icons/bs'
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import firebaseConfig from '../../firebase';

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSent, setIsSent] = useState(false);

    useCollection(firestore.collection('messages'));

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const validateForm = () => {
        const newErrors = {};

        if (name.trim() === '') {
            newErrors.name = 'The field is required';
        }

        if (email.trim() === '') {
            newErrors.email = 'The field is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'E-mail is incorrect';
        }

        if (subject.trim() === '') {
            newErrors.subject = 'The field is required';
        }

        if (message.trim() === '') {
            newErrors.message = 'The field is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0 && validateEmail(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const currentTime = firebase.firestore.FieldValue.serverTimestamp();

        firestore.collection('messages').add({
            name,
            email,
            subject,
            message,
            timestamp: currentTime
        })

        setTimeout(() => {
            setIsSent(false);
        }, 5000);

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setIsSent(true);
    }
    
    return (
        <div className='contact__section' id='contact'>
            <form className='contact__container container' onSubmit={handleSubmit}>
                <h2 className='contact__title'>Get in touch</h2>
                <div className='contact__box'>
                    <div className='contact__form'>
                        <div className='contact__form__1row'>
                            <input className='name__input' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                            {errors.name && <div className="form__error">{errors.name}</div>}
                            <input className='mail__input' type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            {errors.email && <div className="form__error">{errors.email}</div>}
                        </div>
                        <input className='subject__input' type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                        {errors.subject && <div className="form__error">{errors.subject}</div>}
                        <textarea className='message__input' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        {errors.message && <div className="form__error">{errors.message}</div>}
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
                {isSent && <div className="form__message__sent">The message has been successfully sent!</div>}
                <button className='contact__button' type='submit'>Send</button>
            </form>
        </div>
    );
}

export default Contact;