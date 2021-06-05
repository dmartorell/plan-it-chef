/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      <figure>
        <img src={selectedRecipe.image} alt="dish" className="main-image" />
      </figure>
      <i>icon</i>
      <section className="recipe main-container">
        <div className="recipe__head">
          <h1 className="title">
            {selectedRecipe.title}
          </h1>
          <i className="plus-icon-bkg icon-m">
            <img className="plus-icon-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAXklEQVRoge3YwQ2AIBAAQbT/nvWt8QurcaaAgw2vYwz4t23i7GPFWfuMoSsJqAmoCagJqAmoCagJqAmoPW1J903qbS53/vwLCKj5lagJqAmoCagJqAmoCagJqAkAWic4EgNO1VdPlAAAAABJRU5ErkJggg==" alt="icon" />
          </i>
          <i className="cart-icon-bkg icon-m">
            <img className="cart-icon-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACH0lEQVRoge2YPUscURSGHzfiQkIKCWKjpAjBWAWEgIKlIGhvYROL/IJA8hskgRQWptTWD7TRwsJS/AJ/gKhJGSSJrERJYuJY3FnYOc7n3jN7R5wHLuzuzD7nPcyduTMDJSUldf4DXsj4DXQ5zBVLpeGzF7FPFZhqQRZrrgg/Ah7wFXjgLlo6/hLdgAeMuYvWHPPEN9SqcQyMNNPAQAHC18dJVMhK1AbgANjP2HReXEdtiGsAYFY5SLN8bvaPVeCU4OF8rRQqihVuT5+qjfCDEO5aBoxjCDNdGutN2EqfAv+E9JWtNIQ2YEvU2fF/t2ZdiOc0pIJJbl99hrXkY0J8CTzRkgMdwJGosaTopw04FAXeKfrfC/cf4LmiHzCB87g/6gR+CPcnBW9ooQtRSOP+aEY4z9CdngHmRLE1S98zzHRpdL61dMYi74+usZur6otWGvZEUc1hvWil4U1O4bdRWrSSWMohfA3ob0X4ceXgZ5jz4EUrwj/EnGSNAfa4A8/KdaYJhr8CXjpNlIHHwC+CDXx0migjQwTDfwMeOU3k055yv0vxvRtzRPJE9ZJaAb6Q3wIWNtQZJfnlV6EbABgENjALz51soMQ1vcAycO6PVaCvQL7EYvLRzwN++ttc+xJZDilWH4sF8CVyHlOw5sqX9HI3LdqXvdS+LA1sxmzbyODJy5dIH+YEk4f7O9BTAF8qejEnWM0fC5bFtH0lJfeOG015wKnJADEyAAAAAElFTkSuQmCC" alt="icon" />
          </i>
          <p className="url-source">
            From
            {' '}
            <span className="url-source__name">{selectedRecipeSource}</span>
          </p>
        </div>
        {
          selectedRecipe.preparationMinutes
            ? (
              <p className="recipe__times">
                <img src="" alt="" className="info-icon" />
                {`${selectedRecipe.preparationMinutes} min prep + ${selectedRecipe.cookingMinutes} min cooking`}
              </p>
            )
            : <img src="" alt="" className="info-icon" />
        }
        <p className="recipe__servings">
          <img src="" alt="" className="info-icon" />
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
