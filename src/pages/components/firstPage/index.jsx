import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const BookingForm = () => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedHour, setSelectedHour] = useState('10:00 AM');


const navigate = useNavigate();

const toPage = () =>{
  navigate("/services")
}

  const handleBookingDateChange = (date) => {
    setBookingDate(date);
    setCurrentDate(new Date());
  };
  

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit the form
    console.log('Booking Date:', bookingDate);
    console.log('Selected Hour:', selectedHour);
  };

  const availableHours = [
    { value: '10:00 AM', label: '10:00' },
    { value: '11:00 AM', label: '11:00' },
    { value: '12:00 PM', label: '12:00' },
    { value: '01:00 PM', label: '13:00' },
    { value: '02:00 PM', label: '14:00' },
    { value: '03:00 PM', label: '15:00' },
    { value: '04:00 PM', label: '16:00' },
    { value: '05:00 PM', label: '17:00' },
    { value: '06:00 PM', label: '18:00' },
    { value: '07:00 PM', label: '19:00' },
  ];

  const morningHours = availableHours.slice(0, 2);
  const daytimeHours = availableHours.slice(2, 8);
  const eveningHours = availableHours.slice(8, 10);

  return (
    <div className='L-booking-block'>
      <div className='L-booking-top'>
        <h1 className='L-booking-title'>
          BOOKING <MdKeyboardArrowDown className='L-booking-icon-down' />
        </h1>
        <FaRegUser className='L-user-icon' />
      </div>

      <form onSubmit={handleSubmit}>
        <div className='L-calendar-block'>
          <Calendar
            id='bookingDate'
            onChange={handleBookingDateChange}
            value={bookingDate}
            minDate={new Date()}
          />
        </div>

        <div className='L-hours-booking'>

        <div className='L-hour-section'>
  <h2 className='L-booking-daytime'>УТРО</h2>
  <div className='L-hour-buttons'>
    {morningHours.map((hour) => (
      <button
        key={hour.value}
        type='button'
        className={`L-hour-button ${
            selectedHour === hour.value ? 'selected' : ''
                }`}
        onClick={() => handleHourChange(hour.value)}
      >
        {hour.label}
      </button>
    ))}
  </div>
</div>


        <div className='L-hour-section'>
          <h2 className='L-booking-daytime'>ДЕНЬ</h2>
          <div className='L-hour-buttons'>
            {daytimeHours.map((hour) => (
              <button
                key={hour.value}
                type='button'
                className={`L-hour-button ${selectedHour === hour.value ? 'selected' : ''}`}
                onClick={() => handleHourChange(hour.value)}
              >
                {hour.label}
              </button>
            ))}
          </div>
        </div>

        <div className='L-hour-section'>
          <h2 className='L-booking-daytime'>ВЕЧЕР</h2>
          <div className='L-hour-buttons'>
            {eveningHours.map((hour) => (
              <button
                key={hour.value}
                type='button'
                className={`L-hour-button ${selectedHour === hour.value ? 'selected' : ''}`}
                onClick={() => handleHourChange(hour.value)}
              >
                {hour.label}
              </button>
            ))}
          </div>
        </div>

        {selectedHour && bookingDate && (
  <button type='submit' className='L-booking-button' onClick={toPage}>
    ПРОДОЛЖИТЬ
  </button>
)}

</div>

      </form>
    </div>
  );
};

export default BookingForm;
