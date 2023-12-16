import React, { useEffect, useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Numberscreen.css';
// import CallScreen from './CallScreen';

export const NumberContext = createContext();

function NumberScreen() {
  const [dialedNumber, setDialedNumber] = useState('');

  function handleNumberClick(number) {
    setDialedNumber((prevNumber) => prevNumber + number);
  }

  function handleCall() {
    console.log(`Calling ${dialedNumber}`);
    // For a real application, you might want to initiate a call using a service or API.
    // For this example, we'll just log the dialed number to the console.
  }

  return (
    <>
      <NumberContext.Provider value={dialedNumber}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 d-flex justify-content-center align-items-center '>
              <div className='card mx-auto border-0 bg-dark'>
                <div class='card-body '>
                  <div className='d-block text-center'>
                    <span className='mb-2 text-white dialedNumber text-center d-block py-3'>{dialedNumber}</span>
                    <span className='text-center fw-400 display-lead d-block text-primary mb-2 fs-7'>Add Number</span>
                  </div>
                  <div className='dialerbtn'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((number) => (
                      <button className='rounded-circle p-3 border-0 btn text-white' key={number} onClick={() => handleNumberClick(number)}>
                        {number}
                      </button>
                    ))}
                    <button className='btn rounded-circle p-3 border-0 text-white' onClick={handleCall}>
                      Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NumberContext.Provider>
    </>
  );
}

export default NumberScreen;