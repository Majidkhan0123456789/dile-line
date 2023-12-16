import React, { useEffect } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import { useCallLogContext } from '../CallLogContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Numberscreen.css';
const DialedNumberScreen = () => {
  const location = useLocation();
  const dialedNumber = location.state ? location.state.dialedNumber : '';
  const navigate = useNavigate();
  const { addCallLog } = useCallLogContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      addCallLog({ number: dialedNumber });
      navigate('/CallLogScreen');
    }, 10000);

    return () => clearTimeout(timer);
  }, [dialedNumber, navigate, addCallLog]);

  return (
    <>
    <div className='Container'>
      <div className="row m-0">
       <div className=" col-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 d-flex justify-content-center align-items-center">
        <div className='card mx-auto border-0 bg-dark'>
          <div class='card-body p-2'>
          <span className='mb-2 text-primary dialedNumber text-center d-block' style={{fontSize:'12px'}}>Calling mobile</span>
        <span className='mb-2 text-white dialedNumber text-center d-block' style={{fontSize:'12px'}}>Calling: {dialedNumber}</span>
        <span className='mb-2  dialedNumber text-center d-block' style={{fontSize:'10px', color:'GrayText'}}>Call Ending in 10 seconds...</span>
          </div>
          <div  className='dialerbtn'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button className='rounded-circle p-3 border-0 btn text-white' key={number}  >
              {number}
            </button>
            
          ))}
          <button className='btn rounded-circle p-3 border-0 text-white'>Call</button>
        </div>
        </div>
       </div>
      </div>
    </div>
    </>
  );
};

export default DialedNumberScreen;
