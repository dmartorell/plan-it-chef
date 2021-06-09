/* eslint-disable no-underscore-dangle */
import { React } from 'react';
import Navigator from '../Navigator';
import Header from '../Header';

import './style.scss';

const ShoppingListDetail = () => (
  <>
    <Header />
    <main className="white-canvas">
      <section className="main-container">
        <div className="page-head">
          <img className="iconify page-head__icon" data-icon="fluent:document-bullet-list-24-regular" data-inline="false" alt="icon" />
          <h1 className="page-head__title">Shopping Lists</h1>
        </div>
        <ul className="products-list">
          {

            }
        </ul>
      </section>
    </main>
    <Navigator />
  </>
);

export default ShoppingListDetail;
