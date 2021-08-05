import React from 'react';
import { StyledRegistrationPage } from './styles';
import RegistrationForm from '../../components/RegistrationForm';
import { registerNewUserApi } from '../../api/user.api';

const RegistrationPage = () => {
  const registerUser = async (payload) => {
    try {
      await registerNewUserApi(payload);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledRegistrationPage>
      <RegistrationForm registerUser={registerUser} />
    </StyledRegistrationPage>
  );
};

export default RegistrationPage;
