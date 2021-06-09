/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';
import Navigator from './index';
import { loadRecipes } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Footer component', () => {
  describe('When is rendered', () => {
    test('Then \'Planner\' should be in the document', () => {
      const initialState = { recipes: [] };
      loadRecipes.mockReturnValue({ type: 'LOAD_RECIPES', recipes: [] });
      render(<Navigator />, { initialState });
      expect(screen.getByText('Planner')).toBeInTheDocument();
    });
  });
  describe('When is rendered', () => {
    test('Then \'Planner\' should be in the document', () => {
      loadRecipes.mockReturnValue({ type: 'LOAD_RECIPES', recipes: [] });
      render(<Navigator />);
      fireEvent.click(screen.getByTestId('recipes-btn'));
      expect(loadRecipes).toHaveBeenCalled();
    });
  });
});
