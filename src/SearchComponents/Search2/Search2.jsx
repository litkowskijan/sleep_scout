import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { differenceInDays, format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { VscClose } from 'react-icons/vsc';

const Search2 = () => {

    //-----DateRange-----
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(localStorage.getItem('Date From')),
            endDate: new Date(localStorage.getItem('Date To')),
            key: localStorage.getItem('Date Key')
        }
    ])

    const formatDate = (date) => {
        return format(date, 'dd/MM/yyyy');
    };

    const handleSelect = (ranges) => {
        setDateRange([ranges.selection]);
    }
    //-----DateRange-----



    //-----GetInputsToLocalStorage-----
    const [cityValue, setCityValue] = useState(localStorage.getItem('City Value'));

    useEffect(() => {
        localStorage.setItem('City Value', cityValue);
    }, [cityValue]);

    const handleCityInput = (e) => {
        const value = e.target.value;
        setCityValue(value);
    }

    const [guestsValue, setGuestsValue] = useState(localStorage.getItem('Guests Value'));

    useEffect(() => {
        localStorage.setItem('Guests Value', guestsValue);
    }, [guestsValue]);

    const handleGuestsInput = (e) => {
        const value = e.target.value;
        setGuestsValue(value);
    }
    //-----GetInputsToLocalStorage-----



    //-----CalendarVisibility-----
    const[calVisible, setCalVisible] = useState(false);

    const handleFocus = () => {
        setCalVisible(true);
    }

    const handleFocusOut = () => {
        setCalVisible(false);
        localStorage.setItem('Date From', dateRange[0].startDate);
        localStorage.setItem('Date To', dateRange[0].endDate);
        localStorage.setItem('Date Key', dateRange[0].key);
    }
    //-----CalendarVisibility-----



    //-----fetchAPI-----
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = () => {
        fetch('http://localhost:3001/hotels')
          .then(response => response.json())
          .then(jsonData => {
            setData(jsonData);
          })
          .catch(error => {
            console.error(error);
          })
          .finally(() => {
            console.log('CONNECTED to API');
          });
      };

      fetchData();
    }, []);
    //-----fetchAPI-----



    //-----filteredAPI-----
    const filteredData = data.filter(hotel => {
        const isValidCity = cityValue
          ? hotel.city.toLowerCase().includes(cityValue.toLowerCase())
          : true;
        const isValidGuests = guestsValue
          ? hotel.guests >= parseInt(guestsValue)
          : true;
        return isValidCity && isValidGuests;
      });
    //-----filteredAPI-----
    


    //-----sortedAPI-----
    const [sortBy, setSortBy] = useState('');

    const handleSortChange = e => {
      setSortBy(e.target.value);
    };
  
    const sortedData = [...filteredData];
  
    if (sortBy === 'price-low-to-high') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-to-low') {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'guests-low-to-high') {
      sortedData.sort((a, b) => a.guests - b.guests);
    } else if (sortBy === 'guests-high-to-low') {
      sortedData.sort((a, b) => b.guests - a.guests);
    } else if (sortBy === 'rating-low-to-high') {
      sortedData.sort((a, b) => a.stars - b.stars);
    } else if (sortBy === 'rating-high-to-low') {
      sortedData.sort((a, b) => b.stars - a.stars);
    }
    //-----sortedAPI-----



    //-----countDays-----
    function countDays(firstDate, secondDate) {
      const liczbaDni = differenceInDays(new Date(firstDate), new Date(secondDate));
      return Math.abs(liczbaDni);
    }

    const firstDate = localStorage.getItem('Date From');
    const secondDate = localStorage.getItem('Date To');

    if (firstDate && secondDate) {
      const countedDays = countDays(firstDate, secondDate);
      localStorage.setItem("Day Count", countedDays)
    } else {
      console.log('There is no dates in local storage.');
    }

    const finalDays = localStorage.getItem("Day Count");
    //-----countDays-----



    //-----hotelOfferVisible-----
    const [activeHotel, setActiveHotel] = useState(null);

    const showHotelDetails = (index) => {
      setActiveHotel(index);
    };

    const hideHotelDetails = () => {
      setActiveHotel(null);
    };
    //-----hotelOfferVisible-----

    return (
        <>
        <section className='search__section2'>
            <div className='search__form container'>
                <div className='destination__box' >
                    <label htmlFor='destination'>Destination</label>
                    <input
                    type='text'
                    placeholder='City'
                    onChange={handleCityInput}
                    value={cityValue}
                    />
                </div>
                <div className='date__range__box'>
                    <label htmlFor='date-range'>Choose date</label>
                    <input className='date__range__input'
                        onFocus={handleFocus}
                        type="text"
                        value={`${formatDate(dateRange[0].startDate)} - ${formatDate(dateRange[0].endDate)}`} readOnly
                    />
                </div>
                <div className='guests__box'>
                    <label htmlFor='guests-number'>Guests</label>
                    <input
                    type='number'
                    placeholder='Number of guests'
                    onChange={handleGuestsInput}
                    value={guestsValue}
                    />
                </div>
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
        <section className='search__page__section'>
            <div className='search__page__container container'>
                <div className='search__page__1row'>
                    <h2 className='search__page__title'>Search for: {cityValue}</h2>
                    <div className="sort__box">
                        <label htmlFor="sort" className='sort__label'>Sort by: </label>
                        <select id="sort" className='sort__select select-option' value={sortBy} onChange={handleSortChange}>
                          <option className='sort__option' value="">None</option>
                          <option className='sort__option' value="price-low-to-high">Price: Low to High</option>
                          <option className='sort__option' value="price-high-to-low">Price: High to Low</option>
                          <option className='sort__option' value="guests-low-to-high">Guests: Low to High</option>
                          <option className='sort__option' value="guests-high-to-low">Guests: High to Low</option>
                          <option className='sort__option' value="rating-low-to-high">Rating: Low to High</option>
                          <option className='sort__option' value="rating-high-to-low">Rating: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className='search__results'>
                    {sortedData.map((hotel, index) => (
                    <>
                    <div key={hotel.id} className='hotel__box'>
                      <img src={hotel.imgUrl} className='hotel__image' alt='hotel-room'/>
                      <div className='hotel__text__box'>
                          <h3 className='hotel__title'>{hotel.name}</h3>
                          <div className='hotel__price__box'>
                              <p className='hotel__final__price'>{finalDays * hotel.price} $</p>
                              <p className='hotel__price'>{hotel.price} $/night</p>
                          </div>
                          <p className='hotel__lead'>{hotel.description}</p>
                          <div className='hotel__cityrating__box'>
                              <p className='hotel__city'>City: {hotel.city}</p>
                              <p className='hotel__guests'>- {hotel.guests === 1 ? `${hotel.guests} guest` : `${hotel.guests} guests`} -</p>
                              <p className='hotel__rating'>{hotel.stars}/5</p>
                          </div>  
                          <button className="hotel__details__button" onClick={() => showHotelDetails(index)}>View Details</button>
                      </div>
                    </div>

                    {activeHotel === index && (
                      <div className='hotel__details__box'>
                        <div className='hotel__details__content'><div className='inner'>
                          <img src={hotel.imgUrl} alt='hotel-pic'></img>
                          <div className='hotel__details__info'>
                            <h3 className='hotel__details__title'>{hotel.name}</h3>
                            <p className='hotel__details__description' >{hotel.longDescription}</p>
                            <p className='hotel__details__final__price' >{finalDays * hotel.price} $ / {finalDays} nights</p>
                            <p className='hotel__details__price' >{hotel.price} $ / night</p>
                            <p className='hotel__details__other__info'>Other info:</p>
                            <p className='hotel__details__guests' >- For {hotel.guests} guests</p>
                            <p className='hotel__details__beds' >- {hotel.beds} beds</p>
                            <p className='hotel__details__rating' >- Rating {hotel.stars}/5 stars</p>
                            <p className='hotel__details__city' >- City: {hotel.city}</p>
                            <p className='hotel__details__address' >- Address: {hotel.address}</p>
                            <p className='hotel__details__available' >{hotel.isAvailable ? 'Avaible' : 'Not avaible'}</p>
                            <button className='hotel__details__login'>For more details - Log in</button>
                            <VscClose className='hotel__details__exit'onClick={hideHotelDetails} />
                          </div></div>
                        </div>
                      </div>
                    )}
                    </>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Search2;