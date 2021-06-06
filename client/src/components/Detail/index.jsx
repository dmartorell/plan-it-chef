/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadRecipeById } from '../../redux/actions/actionCreators';
import parseUrl from '../../helpers/parseUrl';

import './style.scss';

const Detail = ({ dispatch, selectedRecipe }) => {
  const { recipeId } = useParams();
  useEffect(() => {
    dispatch(loadRecipeById(recipeId));
  }, []);

  const selectedRecipeSource = selectedRecipe.sourceUrl ? parseUrl(selectedRecipe.sourceUrl) : 'No source available.';

  return (
    <main className="detail-canvas">
      <figure className="main-image">
        <i className="iconify bookmark-icon icon-bg" data-icon="fluent:bookmark-20-regular" data-inline="false" />
        <img src={selectedRecipe.image} alt="dish" className="main-image__pic" />
      </figure>
      <section className="recipe">
        <div className="recipe__head">
          <div className="title-container">
            <h1 className="head-title">
              {selectedRecipe.title}
            </h1>
            <i className="iconify plus-icon" data-icon="akar-icons:plus" data-inline="false" />
            <i className="iconify cart-icon icon-bg" data-icon="la:shopping-cart" data-inline="false" />
          </div>
          <p className="url-source">
            From
            {' '}
            <Link to={selectedRecipe.sourceUrl} target="_blank" rel="noopener noreferrer"><span className="url-source__name">{selectedRecipeSource}</span></Link>
          </p>
        </div>
        <div className="recipe__times">
          {
            selectedRecipe.preparationMinutes
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
                    min cooking
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
            <>
              <h3 className="direction-block-title">
                {directionsBlock.name}
              </h3>
              <ul className="instructions-list">
                {
              directionsBlock?.steps?.map((instruction) => (
                <li className="instructions-list__item">
                  <p className="item-number">{instruction.number}</p>
                  <p className="item-text">{instruction.step}</p>
                </li>
              ))
              }
              </ul>
            </>
          ))
          }
        </div>

      </section>
    </main>
  );
};

Detail.propTypes = {
  selectedRecipe: PropTypes.shape({
    sourceUrl: String,
    image: String,
    title: String,
    preparationMinutes: Number,
    cookingMinutes: Number,
    servings: Number,
    instructions: String,
    analyzedInstructions: PropTypes.shape([
      {
        _id: String,
        name: String,
        steps: PropTypes.shape([
          {
            _id: String,
            number: Number,
            step: String,
          },
        ]),
      },
    ]),
    extendedIngredients:
      {
        _id: String,
        original: String,
        aisle: String,
        image: String,
        name: String,
        measures: {
          us:
          {
            amount: Number,
            unitShort: String,
          },
          metric:
          {
            amount: Number,
            unitShort: String,
          },
        },
      },

  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ selectedRecipe }) {
  return {
    selectedRecipe,
  };
}
export default connect(mapStateToProps)(Detail);
