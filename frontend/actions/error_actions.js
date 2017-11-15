const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveErrors = (errors) => (
  {
    type: RECEIVE_ERRORS,
    errors
  }
);

const clearErrors = () => (
  {
    type: CLEAR_ERRORS,
    
  }
);
