/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadRecipeById } from '../../redux/actions/actionCreators';

import './style.scss';

const Detail = ({ dispatch, selectedRecipe }) => {
  const { recipeId } = useParams();
  useEffect(() => {
    dispatch(loadRecipeById(recipeId));
  }, []);

  return (
    <h1>
      TITLE:
      {' '}
      {selectedRecipe.title}
    </h1>
  );
};

Detail.propTypes = {
  selectedRecipe: PropTypes.shape({ title: PropTypes.string }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ selectedRecipe }) {
  return {
    selectedRecipe,
  };
}
export default connect(mapStateToProps)(Detail);
