import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Numberscreen.css';
const DialerScreen = () => {
  const [dialedNumber, setDialedNumber] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = (number) => {
    setDialedNumber((prevNumber) => prevNumber + number);
  };

   const handleCallButtonClick = () => {
    navigate('/DialedNumberScreen', { state: { dialedNumber } });
  };

  return (
    <>
      <div className='Container'>
        <div className="row m-0">
          <div className=" col-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 d-flex justify-content-center align-items-center">
          <div className='card mx-auto border-0 bg-dark'>
                <div class='card-body'>
                <div className='d-block text-center'>
                    <span className='mb-2 text-white dialedNumber text-center d-block py-3'>{dialedNumber}</span>
                    <span className='text-center fw-400 display-lead d-block text-primary mb-2 fs-7'>Add Number</span>
                  </div>
        <div  className='dialerbtn'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button className='rounded-circle p-3 border-0 btn text-white' key={number} onClick={() => handleButtonClick(number)}>
              {number}
            </button>
            
          ))}
          <button className='btn rounded-circle p-3 border-0 text-white' onClick={handleCallButtonClick}>Call</button>
        </div>
        
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default DialerScreen;