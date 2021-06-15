/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import { getFormattedRecipe } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';
import Header from './index';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Header component', () => {
  describe('When is rendered', () => {
    test('Then the app small logo should be in the document', () => {
      render(
        <Header />,
      );
      expect(screen.getByTestId('logo-sm')).toBeInTheDocument();
    });
  });
  describe('And search button is clicked', () => {
    test('Then getFormattedRecipe function should be invoked', () => {
      render(
        <Header />,
      );
      getFormattedRecipe.mockImplementationOnce(() => ({

        type: actionTypes.GET_API_RECIPE,
        recipe: [{}],
      }));

      fireEvent.click(screen.getByTestId('getJson'));
      expect(getFormattedRecipe).toHaveBeenCalled();
    });
  });
});
