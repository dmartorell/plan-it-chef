/* eslint-disable no-underscore-dangle */
import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigator from '../Navigator';
import Header from '../Header';

import './style.scss';

const ShoppingListDetail = () => {
  // const dispatch = useDispatch();
  const { listId } = useParams();
  const shoppingLists = useSelector((store) => store.shoppingLists);
  const { ingredients } = shoppingLists.find((list) => list._id === listId);

  return (
    <>
      <Header />
      <main className="white-canvas">
        <section className="main-container">
          <ul className="shoppingLists-list">
            {
              ingredients.length
                ? ingredients.map((ingredient) => (
                  <li className="shoppingList-item" key={ingredient._id}>
                    <img className="item-image" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} className="item-image" alt="product" />
                    <p className="item-name">
                      {ingredient.name}
                    </p>
                  </li>
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