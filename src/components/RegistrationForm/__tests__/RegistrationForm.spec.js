import { render, act } from '@testing-library/react';
import flushPromises from 'flush-promises';
import userEvent from '@testing-library/user-event';
import RegistrationForm from '../../RegistrationForm';

describe('RegistrationForm', () => {
  const payload = {
    name: 'Harry Potter',
    username: 'harrypotts83',
    email: 'harry.potter@wizards.com',
  };

  let registerUser;
  let context;

  beforeEach(() => {
    registerUser = jest.fn().mockName('registerUser');
    context = render(<RegistrationForm registerUser={registerUser} />);
  });

  describe('On form fill up', () => {
    beforeEach(async () => {
      registerUser.mockResolvedValue();
      const { getByPlaceholderText, getByTestId } = context;

      await userEvent.type(getByPlaceholderText('Name'), payload.name);
      await userEvent.type(getByPlaceholderText('Username'), payload.username);
      await userEvent.type(getByPlaceholderText('Email'), payload.email);

      userEvent.click(getByTestId('new-user-submit-btn'));

      return act(flushPromises);
    });

    it('calls registerUser with the payload', () => {
      expect(registerUser).toHaveBeenCalledWith(payload);
    });
  });
});
