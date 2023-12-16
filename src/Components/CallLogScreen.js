import React from 'react';
import { useCallLogContext } from '../CallLogContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CallLogScreen = () => {
  const { callLog, deleteCallLog } = useCallLogContext();
  const navigate = useNavigate();

  const handleDelete = (index) => {
    deleteCallLog(index);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <div className='Container'>
        <div className="row m-0">
          <div className=" col-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5 d-flex justify-content-center align-items-center">
            <div className='card mx-auto border-0 bg-dark'>
              <div class='card-body'>
                <span className='mb-2 text-primary dialedNumber text-center d-block py-3' style={{ fontSize: '12px' }}>Call Log Screen</span>
                <ul className='d-block'>
                  {callLog.map((item, index) => (
                    <li key={index} className='text-white text-center  d-flex justify-content-between' style={{ fontSize: '12px', listStyle: 'none', height: "30px" }}>
                      {item.number}{' '}
                      <FontAwesomeIcon icon={faTrash } onClick={() => handleDelete(index)} className='mb-2 text-primary dialedNumber text-danger d-flex' style={{cursor: 'pointer', width:'12px', height:'20px' }} />
                    </li>
                  ))}
                </ul>
                <div className='dialerbtn'>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                    <button className='rounded-circle p-3 border-0 btn text-white' key={number}  >
                      {number}
                    </button>
                  ))}
                  <button onClick={handleBack} className='rounded-circle p-3 border-0 text-white' style={{ backgroundColor: 'darkgreen', fontSize: '8px' }}>Back to Dialer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallLogScreen;
