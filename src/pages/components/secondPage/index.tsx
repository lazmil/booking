import './style.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Services = () => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [selectedService, setSelectedService] = useState('Newhall');

  const navigate = useNavigate();

const toPage = () =>{
  navigate("/Conformation")
}

const toPrev = () => {
  navigate("/")
}
  

  const handleOptionClick = (option: number) => {
    setSelectedOptions(prevSelectedOptions => {
      // Toggle selection if the same option is clicked again
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter(selectedOption => selectedOption !== option); // Deselect the option
      }
      return [...prevSelectedOptions, option]; // Select the option
    });
  };

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  const isOptionSelected = (option: number) => {
    return selectedOptions.includes(option);
  };

  const renderBookingButton = () => {
    if (selectedOptions.length > 0) {
      return (
        <button type='submit' className='L-booking-button' onClick={toPage}>
          <h4 className='L-selected-continue'>
            ПРОДОЛЖИТЬ
          </h4>
          <h4 className='L-selected-count'>{selectedOptions.length}</h4>
        </button>
      );
    }
    return null;
  };

  return (
    <div className='L-services-block'>
      <div className='L-services-top'>
      <h1 className='L-services-title'>
          <MdKeyboardArrowLeft className='L-back-icon' onClick={toPrev}/>
          Выбрать услуги
        </h1>
        <div className='L-services-options'>
          <button
            type='submit'
            className={`L-service-button ${selectedService === 'Newhall' ? 'active' : ''}`}
            onClick={() => handleServiceClick('Newhall')}
          >
            <a className='L-atag' href='#Newhall'>
              Rent Newhall
            </a>
          </button>
          <button
            type='submit'
            className={`L-service-button ${selectedService === 'Makeup' ? 'active' : ''}`}
            onClick={() => handleServiceClick('Makeup')}
          >
            <a className='L-atag' href='#Makeup'>
              Rent Make up Room
            </a>
          </button>
        </div>

        </div>
        <div className='L-newhall-options'>
          <h2 id='Newhall' className='L-services-title'>
            Rent Newhall
          </h2>

          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(1)}>
            <h3 className='L-rent-hour'>
              Rent 1 hour <span style={{ color: 'gray', marginLeft: 20 }}>1 ч.</span>
            </h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(1) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              10 000 դր
            </h3>
          </button>

          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(2)}>
            <h3 className='L-rent-hour'>
              Rent 2 hours <span style={{ color: 'gray', marginLeft: 20 }}>2 ч.</span>
            </h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(2) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              20 000 դր
            </h3>
          </button>

          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(3)}>
            <h3 className='L-rent-hour'>
              Rent 3 hours <span style={{ color: 'gray', marginLeft: 20 }}>3 ч.</span>
            </h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(3) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              30 000 դր
            </h3>
          </button>

          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(4)}>
            <h3 className='L-rent-hour'>Rent 4 hours <span style={{ color: 'gray', marginLeft: 20 }}>4 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(4) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              40 000 դր
            </h3>
          </button>
          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(5)}>
            <h3 className='L-rent-hour'>Rent 5 hours <span style={{ color: 'gray', marginLeft: 20 }}>5 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(5) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              50 000 դր
            </h3>
          </button>
          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(6)}>
            <h3 className='L-rent-hour'>Rent 6 hours <span style={{ color: 'gray', marginLeft: 20 }}>6 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(6) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              60 000 դր
            </h3>
          </button>
          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(7)}>
            <h3 className='L-rent-hour'>Rent 7 hours <span style={{ color: 'gray', marginLeft: 20 }}>7 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(7) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              70 000 դր
            </h3>
          </button>
          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(8)}>
            <h3 className='L-rent-hour'>Rent 8 hours <span style={{ color: 'gray', marginLeft: 20 }}>8 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(8) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              80 000 դր
            </h3>
          </button>
          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(9)}>
            <h3 className='L-rent-hour'>Rent 9 hours <span style={{ color: 'gray', marginLeft: 20 }}>9 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(9) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              90 000 դր
            </h3>
          </button>

          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(10)}>
            <h3 className='L-rent-hour'>Bath Use  <span style={{ color: 'gray', marginLeft: 20 }}>2 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(10) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              24 000 դր
            </h3>
          </button>
          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(11)}>
            <h3 className='L-rent-hour'>Fog Machine <span style={{ color: 'gray', marginLeft: 20 }}>1 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(11) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              2 000 դր
            </h3>
          </button>

          <h2 id='Makeup' className='L-services-title'>Rent Make up Room</h2>

          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(12)}>
            <h3 className='L-rent-hour'>Rent 1 chair  <span style={{ color: 'gray', marginLeft: 20 }}>1 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(12) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              2 000 դր
            </h3>
          </button>
          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(13)}>
            <h3 className='L-rent-hour'>Rent 2 chair  <span style={{ color: 'gray', marginLeft: 20 }}>2 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(13) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              4 000 դր
            </h3>
          </button>
          <button type='submit' className='L-option-button' onClick={() => handleOptionClick(14)}>
            <h3 className='L-rent-hour'>Rent 3 chair  <span style={{ color: 'gray', marginLeft: 20 }}>3 ч.</span></h3>
            <h3 className='L-rent-hour' style={{ fontWeight: 400 }}>
              {isOptionSelected(14) ? (
                <AiOutlineMinusCircle className='L-plus-icon' />
              ) : (
                <BsFillPlusCircleFill className='L-plus-icon' />
              )}
              6 000 դր
            </h3>
          </button>

        </div>
        {renderBookingButton()}
    </div>
  );
};

export default Services;
