// actions.js
export const setDialedNumber = (number) => ({
    type: 'SET_DIALED_NUMBER',
    payload: number,
  });
  
  export const clearDialedNumber = () => ({
    type: 'CLEAR_DIALED_NUMBER',
  });
  
  export const deleteCallLogItem = (index) => ({
    type: 'DELETE_CALL_LOG_ITEM',
    payload: index,
  });
  