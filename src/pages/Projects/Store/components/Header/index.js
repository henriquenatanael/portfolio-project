import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

import logo from './logo.svg';

export const Header = ({total, onCart}) => {
  return (
    <div className="Header">
      <Link to="/store">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Link className="Cart" onClick={() => onCart(true)}>
        <div>
          <strong>Cart</strong>
          <span data-testid="cart-size">
            {total === 1 ? `${total} item` : `${total} itens`}
          </span>
        </div>
      </Link>
    </div>
  );
};


