/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import ShoppingListDetail from './index';
import { loadListById } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');
const initialStateFull = {
  selectedList: {
    name: 'My List',
    ingredients: [
      {
        aisle: 'Batman',
        name: 'flour',
        measures: {
          us: {
            amount: 1,
          },
        },
      },
    ],
  },
};
const initialStateEmpty = {
  selectedList: {},
};

describe('Given a ShoppingListDetail component', () => {
  describe('When is rendered with products in the list', () => {
    test('Then the product name should be in the document', () => {
      loadListById.mockReturnValueOnce({
        type: actionTypes.LOAD_LIST,
        list: initialStateFull.selectedList,
      });
      render(
        <ShoppingListDetail />, { initialStateFull },
      );
      expect(screen.getByText(/flour/i)).toBeInTheDocument();
    });
    describe('When is rendered with no products in the list', () => {
      test('Then \'No ingredients available should be in the document', () => {
        loadListById.mockReturnValueOnce({
          type: actionTypes.LOAD_LIST,
          list: initialStateEmpty.selectedList,
        });
        render(
          <ShoppingListDetail />, { initialStateEmpty },
        );
        expect(screen.getByText(/No ingredients available/i)).toBeInTheDocument();
      });
    });
    describe('When any checkbox button is clicked', () => {
      test('Then toggleCheck function should be called', () => {
        const toggleCheck = jest.fn();
        loadListById.mockReturnValueOnce({
          type: actionTypes.LOAD_LIST,
          list: initialStateFull.selectedList,
        });
        render(
          <ShoppingListDetail />, { initialStateFull },
        );
        fireEvent.click(screen.getByTestId('checkbox-btn'));
        expect(toggleCheck).toHaveBeenCalled();
      });
    });
  });
});
