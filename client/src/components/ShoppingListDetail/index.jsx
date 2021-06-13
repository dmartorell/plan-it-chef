/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadListById, updateIngredientsList } from '../../redux/actions/actionCreators';

import Navigator from '../Navigator';
import Header from '../Header';

import './style.scss';

const ShoppingListDetail = () => {
  const imageURL = process.env.REACT_APP_IMAGE_URL;
  const dispatch = useDispatch();
  const { listId } = useParams();
  const token = useSelector((store) => store.user.token);
  const selectedList = useSelector((store) => store.selectedList);
  // eslint-disable-next-line no-unused-vars
  const [isClicked, setClicked] = useState({});

  useEffect(() => {
    dispatch(loadListById(listId, token));
    console.log(selectedList);
  }, [isClicked]);

  const toggleCheck = (ingredientId, marked) => {
    dispatch(updateIngredientsList(listId, selectedList, ingredientId, marked, token));
    setClicked(marked);
    console.log(isClicked);
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
                  <li className="shoppingList-item" key={`${ingredient._id}${i}`}>
                    <img className="item-image" src={`${imageURL}/${ingredient.image}`} alt="product" />
                    <div className="item-info">
                      <p className="item-info__name">
                        {ingredient.name}
                      </p>
                      <p className="item-info__amount">
                        {`${ingredient.measures.us.amount} ${ingredient.measures.us.unitShort}`}
                      </p>
                    </div>
                    {
                      ingredient.isActive
                        ? (
                          <button className="item-btn " type="button" onClick={() => toggleCheck(ingredient._id, true)}>
                            <i className="iconify item-btn__icon" data-icon="system-uicons:checkbox-empty" data-inline="false" />
                          </button>
                        )
                        : (
                          <button className="item-btn" type="button" onClick={() => toggleCheck(ingredient._id, false)}>
                            <i className="iconify item-btn__icon" data-icon="system-uicons:checkbox-checked" data-inline="false" />
                          </button>
                        )
                    }
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
