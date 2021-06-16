import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRecipes } from '../../redux/actions/actionCreators';

import './style.scss';

const Navigator = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user.token);

  return (
    <nav className="navigator">
      <div className="container">
        <Link className="icon-block" to="/recipes" data-testid="recipes-btn" onClick={() => dispatch(loadRecipes(token))}>
          <i className="iconify icon-block__icon" data-icon="feather:bookmark" data-inline="false" alt="icon" />
          <p className="icon-block__description">Recipes</p>
        </Link>
        <Link className="icon-block" to="/recipes">
          <i className="iconify icon-block__icon" data-icon="akar-icons:calendar" data-inline="false" alt="icon" />
          <p className="icon-block__description">Planner</p>
        </Link>
        <Link className="icon-block" to="/lists">
          <i className="iconify icon-block__icon" data-icon="fluent:document-bullet-list-24-regular" data-inline="false" alt="icon" />
          <p className="icon-block__description">Lists</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
