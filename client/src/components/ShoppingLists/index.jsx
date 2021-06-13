/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { React } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigator from '../Navigator';
import Header from '../Header';

import './style.scss';

const ShoppingLists = () => {
  const shoppingLists = useSelector((store) => store.user.lists);

  return (
    <>
      <Header />
      <main className="white-canvas">
        <section className="main-container">
          <div className="page-head">
            <i className="iconify page-head__icon" data-icon="fluent:document-bullet-list-24-regular" data-inline="false" alt="icon" />
            <h1 className="page-head__title">Shopping Lists</h1>
          </div>
          {/* <h2 className="list-picker-title">
            Add to
            <p className="pickedList">
              {' '}
              My List
              <span className="iconify pickedList__icon" data-icon="fe:arrow-down"
              data-inline="false" />
            </p>
          </h2> */}
          <ul className="shoppingLists-list">
            {
              shoppingLists?.length
                ? shoppingLists.map((list, i) => (
                  <Link to={`/lists/${list._id}`} key={`${list.name}${i}`}>
                    <li className="shoppingList-item">
                      {list.name}
                    </li>
                  </Link>
                ))
                : <p className="error-message">No shopping lists available.</p>
            }
          </ul>
        </section>
      </main>
      <Navigator />
    </>
  );
};

export default ShoppingLists;
