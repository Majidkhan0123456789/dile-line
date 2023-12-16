// reducers.js
const initialState = {
    dialedNumber: '',
    callLog: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DIALED_NUMBER':
        return { ...state, dialedNumber: state.dialedNumber + action.payload };
      case 'CLEAR_DIALED_NUMBER':
        return { ...state, dialedNumber: '' };
      case 'DELETE_CALL_LOG_ITEM':
        const newCallLog = [...state.callLog];
        newCallLog.splice(action.payload, 1);
        return { ...state, callLog: newCallLog };
      default:
        return state;
    }
  };
  
//   export default reducer;
  