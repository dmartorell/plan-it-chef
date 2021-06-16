/* eslint-disable react/no-array-index-key */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateIngredientsList, loadListById } from '../../redux/actions/actionCreators';

import Navigator from '../Navigator';
import Header from '../Header';
import checked from '../../assets/check-checked.png';
import empty from '../../assets/check-empty.png';
import { getAisles } from '../../helpers/commonHelper';

import './style.scss';

const ShoppingListDetail = () => {
  const imageURL = process.env.REACT_APP_IMAGE_URL;
  const dispatch = useDispatch();
  const { listId } = useParams();
  const { token, selectedList } = useSelector((store) => ({
    token: store.user.token,
    selectedList: store.selectedList,
  }));

  const aisles = [...getAisles(selectedList)].filter((aisle) => aisle !== '?' && aisle !== undefined);
  const productsFromList = aisles.length
        && aisles.map(
          (aisle) => ({
            name: aisle,
            products: selectedList.ingredients.filter((ingredient) => ingredient.aisle === aisle),
          }),
        );

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
          <h1>{selectedList.name}</h1>
          <ul className="shoppingLists-list">
            {
              productsFromList.length
                ? productsFromList.map((product) => (
                  product.name && (
                  <>
                    <p className="aisle-title">{product.name}</p>
                    {product.products.map((productFromSection, i) => (
                      <li
                        className={
                          productFromSection.isActive
                            ? 'shoppingList-item'
                            : 'shoppingList-item--inactive'
                      }
                        key={`${productFromSection._id}${i}`}
                      >
                        <img className="item-image" src={`${imageURL}/${productFromSection.image}`} alt="product" />
                        <div className="item-info">
                          <p className="item-info__name">
                            {productFromSection.name}
                          </p>
                          <p className="item-info__amount">
                            {`${productFromSection.measures.us.amount} ${productFromSection.measures.us.unitShort}`}
                          </p>
                        </div>

                        <button className="item-btn " type="button" data-testId="checkbox-btn" onClick={() => toggleCheck(productFromSection._id, !productFromSection.isActive)}>
                          {productFromSection.isActive
                            ? checkboxStatus.empty
                            : checkboxStatus.checked}
                        </button>
                      </li>
                    ))}
                  </>
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
