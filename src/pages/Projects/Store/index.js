import React, { useState } from "react";
import "./Store.scss";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { products } from "./db";
import { formatPrice } from "../../../utils";

export const Store = () => {
  const [cart, setCart] = useState([]);
  const [seeCart, setSeeCart] = useState(false);

  const addProduct = (productId) => {
    const updatedCart = [...cart];
    const productExist = updatedCart.find(
      (product) => product.id === productId
    );

    const currentAmount = productExist ? productExist.amount : 0;
    const amount = currentAmount + 1;
    if (productExist) {
      productExist.amount = amount;
    } else {
      const product = products.find((product) => product.id === productId);

      const newProduct = {
        ...product,
        amount: 1,
      };
      updatedCart.push(newProduct);
    }
    setCart(updatedCart);
  };

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;

    return newSumAmount;
  }, {});

  const onCart = (value) => {
    setSeeCart(value);
  };

  const onCheckout = () => {
    setCart([])
    onCart(false)
  }

  const removeProduct = (productId) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (product) => product.id === productId
    );

    if (productIndex >= 0) {
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
    } else {
      throw Error();
    }
  };

  const updateProductAmount = async ({ productId, amount }) => {
    if (amount <= 0) {
      return;
    }

    const updatedCart = [...cart];
    const productExist = updatedCart.find(
      (product) => product.id === productId
    );

    if (productExist) {
      productExist.amount = amount;
      setCart(updatedCart);
    } else {
      throw Error();
    }
  };

  return (
    <div className="body">
      <div className="content-store">
        <Header total={cart.length} onCart={onCart} />
      </div>
      <div className="content-store">
        {!seeCart && (
          <ul className="product-list">
            {products.map((product) => (
              <li key={String(product.id)}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{formatPrice(product.price)}</span>
                <button
                  type="button"
                  data-testid="add-product-button"
                  onClick={() => addProduct(product.id)}
                >
                  <div className="total-cart">
                    {cartItemsAmount[product.id] || 0}
                  </div>
                  <span>ADD TO CART</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {seeCart && (
          <Cart
            cart={cart}
            removeProduct={removeProduct}
            updateProductAmount={updateProductAmount}
            onCart={onCart}
            onCheckout={onCheckout}
          />
        )}
      </div>
    </div>
  );
};

export default Store;
