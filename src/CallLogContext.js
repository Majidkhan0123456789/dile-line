import React, { createContext, useContext, useState } from 'react';

const CallLogContext = createContext();

export const useCallLogContext = () => {
  const context = useContext(CallLogContext);
  if (!context) {
    throw new Error('useCallLogContext must be used within a CallLogContext Provider');
  }
  return context;
};

export const CallLogProvider = ({ children }) => {
  const [callLog, setCallLog] = useState([]);

  const addCallLog = (log) => {
    setCallLog((prevCallLog) => [...prevCallLog, log]);
  };

  const deleteCallLog = (index) => {
    const newCallLog = [...callLog];
    newCallLog.splice(index, 1);
    setCallLog(newCallLog);
  };

  return (
    <CallLogContext.Provider value={{ callLog, addCallLog, deleteCallLog }}>
      {children}
    </CallLogContext.Provider>
  );
};

export default CallLogContext;
