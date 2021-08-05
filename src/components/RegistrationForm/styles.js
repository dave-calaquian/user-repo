import styled from 'styled-components/';

export const StyledRegistrationFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 400px;
`;

export const StyledRegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  .form-field {
    margin: 8px 0;
    height: 54px;

    &.input {
      border-radius: 8px;
      outline: none;
      box-shadow: none;
    }
  }

  .submit-btn {
    height: 54px;
    margin: 32px 0;

    &:hover {
      cursor: pointer;
    }
  }
`;
