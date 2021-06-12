/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadRecipeById, loadShoppingLists, updateListById } from '../../redux/actions/actionCreators';
import Navigator from '../Navigator';
import parseUrl from '../../helpers/parseUrl';
import defaultImg from '../../assets/default-image-bg.png';

import './style.scss';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const selectedRecipe = useSelector((store) => store.selectedRecipe);
  const shoppingList = useSelector((store) => store.user.lists[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadShoppingLists());
  }, []);
  useEffect(() => {
    dispatch(loadRecipeById(recipeId));
  }, []);

  const selectedRecipeSource = selectedRecipe.sourceUrl ? parseUrl(selectedRecipe.sourceUrl) : 'No source available.';

  const updateShoppingList = () => {
    // const updatedShoppingList = [...shoppingList.ingredients];

    selectedRecipe.extendedIngredients
      .map((ingredient) => shoppingList.ingredients
        .push({ ...ingredient, isActive: true, recipe: selectedRecipe._id }));
    return shoppingList.ingredients;
  };

  const handleClick = () => {
    const updatedList = updateShoppingList();
    console.log({ updatedList });
    console.log({ shoppingList });
    dispatch(updateListById(shoppingList._id, { ingredients: updatedList }));
  };

  return (
    <>
      <main className="white-canvas">
        <figure className="main-image">
          {
          selectedRecipe.image
            ? (
              <>
                <button type="button">
                  <i className="iconify bookmark-icon icon-bg" data-icon="fluent:bookmark-20-regular" data-inline="false" />
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
                <button type="button" onClick={handleClick}>
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
          selectedRecipe?.extendedIngredients?.map((ingredient) => (
            <li className="ingredients-list__item" key={ingredient._id}>
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
          selectedRecipe?.analyzedInstructions?.map((directionsBlock) => (
            <ul>
              <li key={directionsBlock._id}>
                <h3 className="direction-block-title">
                  {directionsBlock.name}
                </h3>
                <ul className="instructions-list">
                  {
              directionsBlock?.steps?.map((instruction) => (
                <li className="instructions-list__item" key={instruction.number}>
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
