import React from 'react';
import './Cart.scss'
import { formatPrice } from '../../../../../utils/index';
 
export const Cart = ({cart, removeProduct, updateProductAmount, onCart, onCheckout }) => {
 
  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }))
  const total =
    formatPrice(
      cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount
      }, 0)
    )

  function handleProductIncrement(product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 })
  }

  function handleProductDecrement(product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 })
  }

  function handleRemoveProduct(productId) {
    removeProduct(productId);
  }

  return (
    <div className="container-cart">
      <table className="table">
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>ITEM</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map(product => (
            <tr data-testid="product" key={String(product.id)}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                  disabled={product.amount <= 1}
                  onClick={() => handleProductDecrement(product)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                  onClick={() => handleProductIncrement(product)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <button style={{margin: '0 auto'}} onClick={() => onCart(false)} type="button">Back</button>
        <button type="button" onClick={onCheckout}>Checkout</button>
        <div class="total">
          <strong>{total}</strong>
        </div>
      </footer>
    </div>
  );
}; 