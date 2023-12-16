import React from 'react';
import DialerScreen from './Components/DialerScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DialedNumberScreen from './Components/DialedNumberScreen';
import CallLogScreen from './Components/CallLogScreen';
import { CallLogProvider } from './CallLogContext'; // Assuming you have exported CallLogProvider from CallLogContext

const App = () => {
  return (
    <Router>
      <CallLogProvider>
        <Routes>
          <Route path="/" element={<DialerScreen />} />
          <Route path="/DialedNumberScreen" element={<DialedNumberScreen />} />
          <Route path="/CallLogScreen" element={<CallLogScreen />} />
        </Routes>
      </CallLogProvider>
    </Router>
  );
};

export default App;
