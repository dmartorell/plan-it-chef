/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Signup from './index';
import { signup } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Signup component', () => {
  describe('When is rendered', () => {
    test('Then \'Create an account\' should be in the document', () => {
      render(
        <Signup />,
      );
      expect(screen.getByText(/Create an account/i)).toBeInTheDocument();
    });
    describe('And Signup button is clicked', () => {
      test('Then signup function should be dispatched', () => {
        const newUser = { email: 'user@email.com', firstName: 'John', password: '1234' };
        signup.mockImplementationOnce(() => ({
          type: actionTypes.CREATE_USER,
          user: newUser,
        }));
        render(
          <Signup />,
        );
        const inputEmail = screen.getByTestId('email-input');
        fireEvent.change(inputEmail, { target: { value: 'user@email.com' } });
        const inputFirstName = screen.getByTestId('firstName-input');
        fireEvent.change(inputFirstName, { target: { value: 'John' } });
        const inputPassword = screen.getByTestId('password-input');
        fireEvent.change(inputPassword, { target: { value: '1234' } });
        fireEvent.click(screen.getByText('Sign Up'));
        expect(signup).toHaveBeenCalled();
      });
    });
  });
});
