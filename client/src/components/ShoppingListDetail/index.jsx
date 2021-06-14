/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateIngredientsList, loadListById } from '../../redux/actions/actionCreators';

import Navigator from '../Navigator';
import Header from '../Header';
import checked from '../../assets/check-checked.png';
import empty from '../../assets/check-empty.png';

import './style.scss';

const ShoppingListDetail = () => {
  const imageURL = process.env.REACT_APP_IMAGE_URL;
  const dispatch = useDispatch();
  const { listId } = useParams();
  const { token, selectedList } = useSelector((store) => ({
    token: store.user.token,
    selectedList: store.selectedList,
  }));

  useEffect(() => {
    console.log(selectedList);
  });

  useEffect(() => {
    dispatch(loadListById(listId, token));
  }, []);

  const [checkbox, setCheckbox] = useState(false);

  const toggleCheck = (ingredientId, marked) => {
    dispatch(updateIngredientsList(listId, selectedList, ingredientId, marked, token));
    setCheckbox(!checkbox);
  };

  const checkboxStatus = {

    checked: <img className="item-btn__icon" src={checked} alt="checked" />,
    empty: <img className="item-btn__icon" src={empty} alt="empty" />,

  };

  return (
    <>
      <Header />
      <main className="white-canvas">
        <section className="main-container">
          <ul className="shoppingLists-list">
            {
              selectedList.ingredients?.length
                ? selectedList.ingredients.map((ingredient, i) => (
                  ingredient.name && (
                  <li
                    className={
                    ingredient.isActive
                      ? 'shoppingList-item'
                      : 'shoppingList-item--inactive'
                  }
                    key={`${ingredient._id}${i}`}
                  >
                    <img className="item-image" src={`${imageURL}/${ingredient.image}`} alt="product" />
                    <div className="item-info">
                      <p className="item-info__name">
                        {ingredient.name}
                      </p>
                      <p className="item-info__amount">
                        {`${ingredient.measures.us.amount} ${ingredient.measures.us.unitShort}`}
                      </p>
                    </div>

                    <button className="item-btn " type="button" onClick={() => toggleCheck(ingredient._id, !ingredient.isActive)}>
                      {ingredient.isActive ? checkboxStatus.empty : checkboxStatus.checked}
                    </button>
                  </li>
                  )
                ))
                : <p className="error-message">No ingredients available.</p>
            }
          </ul>
        </section>
      </main>
      <Navigator />
    </>
  );
};

export default ShoppingListDetail;
