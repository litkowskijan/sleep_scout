import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Link } from 'react-router-dom';

const Search = () => {

    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const formatDate = (date) => {
        return format(date, 'dd/MM/yyyy');
    };

    const handleSelect = (ranges) => {
        setDateRange([ranges.selection]);
    }

    const [cityValue, setCityValue] = useState('');

    const handleCityInput = (e) => {
        const value = e.target.value;
        setCityValue(value);
    }

    const [guestsValue, setGuestsValue] = useState('');

    const handleGuestsInput = (e) => {
        const value2 = e.target.value;
        setGuestsValue(value2);
    }

    const handleSearch = () => {
        localStorage.setItem('City Value', cityValue);
        localStorage.setItem('Date From', dateRange[0].startDate);
        localStorage.setItem('Date To', dateRange[0].endDate);
        localStorage.setItem('Date Key', dateRange[0].key);
        localStorage.setItem('Guests Value', guestsValue);
    }

    const[calVisible, setCalVisible] = useState(false);

    const handleFocus = () => {
        setCalVisible(true);
    }

    const handleFocusOut = () => {
        setCalVisible(false);
    }

    return (
        <>
        <section className='search__section'>
            <div className='search__form container'>
                <div className='destination__box' >
                    <label htmlFor='destination' className='label__class'>Destination</label>
                    <input 
                    type='text' 
                    placeholder='City'
                    onChange={handleCityInput}
                     />
                </div>
                <div className='date__range__box'>
                    <label htmlFor='date-range'>Choose date</label>
                    <input className='date__range__input'
                        onFocus={handleFocus}
                        type="text"
                        value={`${formatDate(dateRange[0].startDate)} - ${formatDate(dateRange[0].endDate)}`}                    readOnly
                    />
                </div>
                <div className='guests__box'>
                    <label htmlFor='guests-number'>Guests</label>
                    <input 
                    type='number' 
                    placeholder='Number of guests' 
                    onChange={handleGuestsInput}
                    />
                </div>
                <Link
                to='/searchpage'
                className='search__button'
                onClick={handleSearch}>
                    Search
                </Link>
            </div>
        </section>
        <div>
            {calVisible && <div className='calendar__box'>
                <DateRangePicker
                className='date__range__picker'
                ranges={dateRange}
                onChange={handleSelect}
                />
                <button
                className='accept__button'
                onClick={handleFocusOut}>Accept</button>
            </div>}
        </div>
        </>
    );
}

export default Search;