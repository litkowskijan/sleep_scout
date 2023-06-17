import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Search = () => {

    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const handleSelect = (ranges) => {
        setDateRange([ranges.selection]);
    }

    const formatDate = (date) => {
        return format(date, 'dd/MM/yyyy');
    };

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
                    <label htmlFor='destination'>Destination</label>
                    <input type='text' placeholder='City' />
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
                    <input type='number' placeholder='Number of guests' />
                </div>
                
                <button className='search__button'>Search</button>
            </div>
        </section>
        
        <div className='calendar__box'>
            {calVisible && <DateRangePicker
            className='date__range__picker'
            ranges={dateRange}
            onChange={handleSelect}
            />}
            {calVisible && <button
            className='accept__button'
            onClick={handleFocusOut}>Accept</button>}
        </div>
        
        </>
        
    );
}

export default Search;
