/* eslint-disable no-underscore-dangle */
import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { loadRecipes } from '../../redux/actions/actionCreators';
import Header from '../Header';
import Footer from '../Footer';
import parseUrl from '../../helpers/parseUrl';
import defaultImg from '../../assets/default-image-bg.png';
import './style.scss';

const Recipes = ({ recipes, dispatch }) => {
  useEffect(() => {
    if (!recipes.length) dispatch(loadRecipes());
  }, []);

  const [inputValue, setInputValue] = useState('');

  const handleClick = (event) => {
    setInputValue('');
    event.preventDefault();
    dispatch(loadRecipes(inputValue));
  };

  return (
    <>
      <Header />
      <main className="recipes-canvas">
        <section className="main-container">
          <div className="page-head">
            <img className="page-head__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC10lEQVRoge2ZwUsUURzHv7/JLXSF2Or9HoEdDG+KN9FEuxkRSVC3III8FiH9AaUEXWutY4JUQpcCA8mbgSUdIiTZulidhH1v2Yu4lWHz67CzsYhrb8bdxmA+p/fezO/7+31neDPwe0BCQsJ/DUUJUkoNALhGRIMANIB9EfP/ApAXkQUiemCtfRNWIKyBJma+B+Bq2EROxRDdN8bcALDpGhPqyTHzBBpUfEBva2trplQqvXQNcH4DSqkBIlqoWprxff+21no5l8v9DFVmQGdn535jTDcR3SSi4WBZAAxYaxejaNZEKfWUmYWZRSn1oq7iAJj5eUWfmadd4zzXG4MNCwAQkfGwBf4N3/fvVE1PusY5G0D5a1MeaL0cIs5NXOsPVdOjrnHOe4CZpTK21kb6/DYiR5g3sCdJDMRNYiBuEgNxkxiIm8RA3CQG4iYxEDeJgbhJDNSCmYeY+Qszf2bmU43K0wgDTcw8BmAOQDuA4wDmtNbZjo6OA/VOVlcDWut2Zl4AcGuLNonI9bW1tXda66565qybAaXUFRFZBtBXWSOiWSKarbqtS0Teaq1H6pV31wYymcxBZp4mokkA6WD5BxGNGmOGjTFnAVwG8C24lhaRh8z8rK2t7dBu8+/KgNa6L5VKvQdwsbImIp9E5IQxJotynxPW2kee5/UAqG5end/Y2FhSSjl34bYjqoEmZh4Tkdcob9IKjz3P6ykUCktbA/L5/MeWlpZeIppAYIyIjhHRvNY6CyAVpZBInTkAiwD6q+ZFIhoxxsy4aGmtz4nIJIDDtTRdO3NRDfxBROZ9379ULBZXXbUCPQ1gCsDp7a7/i9biJoDxQqEwFLZ4ALDWGmvtGSIaBRDpfAEIZ+B71XjF87x+a+0YyudcURFjTNbzvEEAKzVy7YjzEVM6nU4B6AbwxPf9C9bar+517sz6+vpqc3PzFBEdQfnvfbdUKr2ql35CQsIe5jcj4+Hph0oyMAAAAABJRU5ErkJggg==" alt="icon" />
            <h1 className="page-head__title">Recipes</h1>
            <form className="page-head__form">
              <input className="form-input" value={inputValue} onChange={(event) => { setInputValue(event.target.value); }} autoComplete="off" placeholder="Find" type="text" id="fname" size="15" />
              <button type="submit" className="form-btn" onClick={handleClick} data-testid="search-btn">
                <img className="form-btn__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFSUlEQVRoge2ZW2xURRjHf3N2Wxt2VeSFEOluSdCQLHYL7RZNFGsQBWxSbvqC8ZUQbfRBgw8aiz4hL2qMIeHJRIxGCEHuSBTQBOlB6cUVidhuW7xFuTRSWre75/Nht+Wcs5ee2W21Jv29zXfm/L/v352ZMzOFGWaYElQ5Lyfq6+cx6lujFA+DRBDCKO7IPh5E0QcSF+GUpNThBXHzt0moOS8lGemta2gyhBdBrQJ8Hl9LAUeVxY5Qt3m6lLzF0DIysHTpQivtexd4vKykiiOkrNbQd9/8VI6OQ9Nrx77axmdQ8h4QmKTUN0C2hDvNDyZFzUun/mjsdYFX8z4UuYBS+xFOpJHLs0heBhiWimpDGXejWAm0AIvyV6C2hTva20or3yYzUYf+aOwNgVfyPGoXjJdrOs9+4SVRYknjA8riTZAHc6so30xRI9nh9L4rnETRGuowdykQnWQCaiDauFmQt4FKxzPF0zUd5m4dPTsFjWQndgf2OSFcUah1oa72L0tNCNB/X2y5GOwD5thKuYEl0XC32VOKplHoQXZ1sk/s5GSYAAh1m6cNg/XA6K2oBDHknVI18xrprWtowr3EKlonw8QY1efNU0p43hlVT/TXNj5Uil5eI5mP3S0EdTbUYe4qJUExqrvMnYDpyKXkpVK0cowk6uvngXL8Gj5DtupObC8oEMHY6gqv7lm8bK6uVu4vMupbA/htke+rz5undIW9kl2+L9pCfr/fWq2rk2MkswF08KmuqD6y39GyaNJVyDNHJOJsckJXVBuVkyOSt18Rco0IYXvTp9SArqguaYt+RwnKWYMXco0obrc3K1NDv2hXpkkwPfyzs4TxM41nCn4Qx7iaml3W4csLg8Ggqw41mr9nYfINrb/szWDV6DxdUV18w2lXDvlDVyPXiEHC3kyLVOuK6uIzCNnbCn7X1ci3asUdzcx5YmqxDEcOS/hWVyLHiFiG+zzdoiuqiyhx5ZDPdTVyjaTlEJmLgjEWZTeRU0JfbWyFgnttoaQ/aZzU1ckxkr2yOeroJGq7lHl1lA8BhcF2R1DJR/N/aL+iq5V3+VUWO1yhxoFo42Zd8YnoizY8i1Bvj4nwVilaBf/K/XWxwyLYN2+jyuLRybqTSkSXPaKwjgEV48UIH4a6zE2l6BX+IKas1syVzTgVYrBvYEnMvanUpreuoUlh7cFmAvizwpd6oVTNgkYyl2eyxRWeY1l81l8b21LKnBFQiWjDc4ao4zjO6wBcuJpMDupqjjFhMX11jW2IvJanqnOC2lrT1e5pqeyrja3AYLt7TjiKURxJXw+sX5A4OeJF0/GupyIKmclwEWQ/ihNWWgYC1shlgCGjar7hU9VYxkpR0uJaYotx4Ebq5sZIPJ702B/QGB6JutgmJWonSFAnQYkcTA5d23jPpUt/e31hwt3vGDUd5m4siYIcKq22cQT4BOR4kT7NlYG79vy4cOFtXkU9GwEId5s94c5zzUrUcuAAzh3ARIwAHxvI/eFO8ylrMNgirg+vi+bKwOy9Xs2U9bXuWbxsrt9vrc6esSMoasgcitLAFeBXEUyl5GusqoPh7q+u2d/vrWmqUncO7VOwqnAWOZQcur5homE25YemiYhHIpVB/6y9QHOhPgJHZTCwrthq9p8bAW9mgGPWYGBtITPTwgiUb2baGIHyzEwrI+DVjBw3ZlWsrT5zZngsorX8/htE4vGkNRh4svjSrB6zbqY22CPTzgjAgsTJkaHUzRbgYN4OIm3uf6JOu6FlJ+8wE2kLd53b5u47rY2Ay0wBE/8bemuaqhJ1sZJOjjPMUCb/AKkg5sGUjouIAAAAAElFTkSuQmCC" alt="icon" />
              </button>
            </form>
          </div>
          <ul className="recipes-list">
            {
            recipes.length
              ? recipes.map((recipe) => {
                const recipeSource = recipe.sourceUrl ? parseUrl(recipe.sourceUrl) : 'No source available.';
                return (
                  <li key={recipe._id} className="recipe-item">
                    <figure>
                      <Link to={`/recipes/detail/${recipe._id}`}>
                        {
                          recipe.image
                            ? <img className="recipe-item__image" alt="recipe" src={recipe.image} />
                            : <img className="recipe-item__image" alt="recipe" src={defaultImg} />
                        }
                      </Link>
                      {
                        recipe.preparationMinutes !== undefined

                          ? (
                            <div className="times">
                              <p className="times__preparation">
                                <span className="preparation-title times-title">prep</span>
                                <span className="preparation-data times-data">
                                  {recipe.preparationMinutes}
                                </span>
                              </p>
                              <p className="times__cooking">
                                <span className="cooking-title times-title">cook</span>
                                <span className="cooking-data times-data">{recipe.cookingMinutes}</span>
                              </p>
                            </div>
                          )
                          : <></>
                      }
                    </figure>
                    <div className="title-container">
                      <h2 className="recipe-item__title">
                        <Link to={`/recipes/detail/${recipe._id}`}>{recipe.title}</Link>
                      </h2>
                      <img className="more-info-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAwklEQVRoge3SMQ6CMBjF8fd96QV09wy49Ap6IBcuYbiHnsCBAxA6uDLrakjcWx1k0IZYXMrg+yUs9B+SlwIQERERERER/SeZEllrV977SkQ2w6taRErnXDdH/9MAa+0qhHAGsIyOelUt2ra95Oxjmhrgva9GPg4AixDCPncfSw54u9Yx29x9LDkg4TF3P2VA/eXsNEP/YcovVALoR45uxphd7j6WHOCc61S1AHAEcB+egzFm3TTNNXdPRERERERERC9PXEB7osEYMHIAAAAASUVORK5CYII=" alt="icon" />
                    </div>
                    <p className="recipe-item__webSite">
                      {recipeSource}
                    </p>
                  </li>
                );
              })
              : <p className="error-message">No recipes available.</p>
          }
          </ul>
        </section>
      </main>
      <Footer />
    </>
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
