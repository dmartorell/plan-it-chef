/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadRecipes from '../../redux/actions/actionCreators';
import Header from '../Header/index';
import parseUrl from '../../helpers/parseUrl';
import './style.scss';

const Recipes = ({ recipes, dispatch }) => {
  useEffect(() => {
    if (!recipes.length) dispatch(loadRecipes());
  }, []);

  return (
    <main className="recipes-canvas">
      <Header />
      <div className="container">
        <h1 className="page-title">Recipes</h1>
        <ul className="recipes-list">
          {
          recipes
            ? recipes.map((recipe) => {
              const recipeSource = recipe.sourceUrl ? parseUrl(recipe.sourceUrl) : 'No source available.';
              return (
                <article key={recipe._id} className="recipe-item">
                  <figure>
                    <img className="recipe-item__image" alt="recipe" src={recipe.image} />
                    <div className="times">
                      <span className="times__preparation">
                        prep
                        {' '}
                        {recipe.preparationMinutes}
                      </span>
                      <span className="times__cooking">
                        cook
                        {' '}
                        {recipe.cookingMinutes}
                      </span>
                    </div>
                  </figure>
                  <h2 className="recipe-item__title">{recipe.title}</h2>
                  <p className="recipe-item__webSite">
                    {recipeSource}
                  </p>
                </article>
              );
            })
            : <p>Your list is empty.</p>
        }
        </ul>
      </div>
    </main>
  );
};
Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ recipes }) {
  return {
    recipes,
  };
}
export default connect(mapStateToProps)(Recipes);
