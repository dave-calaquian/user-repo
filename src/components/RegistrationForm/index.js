import React, { useReducer } from 'react';
import {
  StyledRegistrationFormContainer,
  StyledRegistrationForm,
} from './styles';

const initialState = {
  name: '',
  username: '',
  email: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const RegistrationForm = ({ registerUser }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(state);
  };

  return (
    <StyledRegistrationFormContainer>
      <StyledRegistrationForm onSubmit={handleSubmit}>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          onChange={(e) =>
            dispatch({ type: 'SET_NAME', payload: e.target.value })
          }
          className='form-field input'
        />
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
          onChange={(e) =>
            dispatch({ type: 'SET_USERNAME', payload: e.target.value })
          }
          className='form-field input'
        />
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Email'
          onChange={(e) =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
          className='form-field input'
        />

        <button
          data-testid='new-user-submit-btn'
          type='submit'
          className='submit-btn'
        >
          Submit
        </button>
      </StyledRegistrationForm>
    </StyledRegistrationFormContainer>
  );
};

export default RegistrationForm;
