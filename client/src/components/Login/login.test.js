/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Login from './index';
import { login } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Login component', () => {
  describe('When is rendered', () => {
    test('Then \'Log in\' should be in the document', () => {
      render(
        <Login />,
      );
      expect(screen.getByText(/Log in/i)).toBeInTheDocument();
    });
    describe('And user has a token', () => {
      test('Then Recipes page should be rendered', () => {
        const initialState = { user: { token: '3' } };
        global.window = { location: { pathname: null } };
        render(
          <Login />, { initialState },
        );
        expect(global.window.location.pathname).toEqual('/recipes');
      });
    });
    describe('And login button is clicked', () => {
      test('Then login function should be dispatched', () => {
        const initialState = { user: { email: '123', password: '123' } };
        login.mockImplementationOnce(() => ({
          type: actionTypes.LOGIN_USER,
          user: initialState.user,
        }));
        render(
          <Login />,
        );
        const inputName = screen.getByTestId('email-login');
        fireEvent.change(inputName, { target: { value: 'user@email.com' } });
        const inputPassword = screen.getByTestId('password-login');
        fireEvent.change(inputPassword, { target: { value: '1234' } });
        fireEvent.click(screen.getByText('Let\'s cook!'));
        expect(login).toHaveBeenCalled();
      });
    });
  });
});
