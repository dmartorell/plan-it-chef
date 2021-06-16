/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { React, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {
  loadRecipeById, updateListById, loadShoppingLists, deleteRecipeById,
} from '../../redux/actions/actionCreators';
import Navigator from '../Navigator';
import { parseUrl } from '../../helpers/commonHelper';
import defaultImg from '../../assets/default-image-bg.png';

import './style.scss';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const token = useSelector((store) => store.user.token);
  const selectedRecipe = useSelector((store) => store.selectedRecipe);
  const shoppingList = useSelector((store) => store.selectedList);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(loadShoppingLists(token));
  }, []);
  useEffect(() => {
    dispatch(loadRecipeById(recipeId, token));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const selectedRecipeSource = selectedRecipe.sourceUrl ? parseUrl(selectedRecipe.sourceUrl) : 'No source available.';
  const handleClick = () => {
    dispatch(updateListById(shoppingList, selectedRecipe, token));
  };

  const [bookmark, setBookmark] = useState(true);

  const handleBookmark = async () => {
    await setBookmark(!bookmark);
    await dispatch(deleteRecipeById(recipeId, token));
    await history.push('/recipes');
  };

  return (
    <>
      <main className="white-canvas">
        <figure className="main-image">
          {
          selectedRecipe.image
            ? (
              <>
                <button type="button" data-testId="bookmark-btn" onClick={handleBookmark}>
                  {bookmark
                    ? <img className="icon-bg bookmark-icon" src="data:image/png;base64,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" alt="bookmark" />
                    : <img className="icon-bg bookmark-icon" src="data:image/png;base64,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" alt="bookmark" />}

                </button>
                <img className="main-image__pic" alt="recipe" src={selectedRecipe.image} />
              </>
            )
            : <img className="main-image__pic" alt="recipe" src={defaultImg} />
        }
        </figure>
        <div className="container">
          <section className="recipe">
            <div className="recipe__head">
              <div className="title-container">
                <h1 className="head-title">
                  {selectedRecipe.title}
                </h1>
                <i className="iconify plus-icon" data-icon="akar-icons:plus" data-inline="false" />
                <button type="button" data-testId="addToCartBtn" onClick={handleClick}>
                  <i className="iconify cart-icon icon-bg" data-icon="la:shopping-cart" data-inline="false" data-testid="add-btn" />
                </button>
              </div>
              <p className="url-source">
                From
                {' '}
                <a href={selectedRecipe.sourceUrl} target="_blank" rel="noopener noreferrer"><span className="url-source__name">{selectedRecipeSource}</span></a>
              </p>
            </div>
            <div className="recipe__times">
              {
            selectedRecipe.preparationMinutes !== undefined
              ? (
                <>
                  <i className="iconify info-icon" data-icon="cil:clock" data-inline="false" />
                  <p>
                    {selectedRecipe.preparationMinutes}
                    {' '}
                    min prep +
                    {' '}
                    {selectedRecipe.cookingMinutes}
                    {' '}
                    min cook
                  </p>
                </>
              )
              : <i className="iconify info-icon" data-icon="cil:clock" data-inline="false" />
          }
            </div>
            <p className="recipe__servings">
              <span className="iconify info-icon" data-icon="mdi:silverware-fork" data-inline="false" />
              {`${selectedRecipe.servings} servings`}
            </p>
            <h2 className="recipe-section ingredient-title">
              Ingredients:
            </h2>
            <ul className="ingredients-list">
              {
          selectedRecipe?.extendedIngredients?.map((ingredient, i) => (
            <li className="ingredients-list__item" key={i}>
              <p className="item-name">
                {ingredient.original}
              </p>
            </li>
          ))
          }
            </ul>
            <h2 className="recipe-section ingredient-directions">
              Directions:
            </h2>
            <div className="directions-list">
              {
          selectedRecipe?.analyzedInstructions?.map((directionsBlock, i) => (
            <ul>
              <li key={i}>
                <h3 className="direction-block-title">
                  {directionsBlock.name}
                </h3>
                <ul className="instructions-list">
                  {
              directionsBlock?.steps?.map((instruction, index) => (
                <li className="instructions-list__item" key={index}>
                  <p className="item-number">{instruction.number}</p>
                  <p className="item-text">{instruction.step}</p>
                </li>
              ))
              }
                </ul>
              </li>
            </ul>
          ))
          }
            </div>
          </section>
        </div>
      </main>
      <Navigator />
    </>
  );
};

export default RecipeDetail;
