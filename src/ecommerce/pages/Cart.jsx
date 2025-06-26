import React, { useContext, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import './Cart.css';
import { EcomContext } from '../components/UseContext';

function Cart() {
  const { cart, increment, decrement, setCart } = useContext(EcomContext)
  console.log(cart);


  function trimContent(input) {
    return input.length > 50
      ? input.split(" ").slice(0, 8).join(" ") + "..."
      : input;
  }

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const subTotal = cart.reduce(
    (subTotal, item) => subTotal + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="cart-section">
        <h2>Shopping cart</h2>
        <p>You have {cart.length} item in your cart</p>
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{trimContent(item.title)}</h3>
              <p>{trimContent(item.description)}</p>

              <div className="item-controls">
                <div className="buttons">
                  <button onClick={() => decrement(item.id)}><FaMinus /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)}><FaPlus /></button>

                  <span>₹ {item.price * item.quantity}</span>
                  <button onClick={() => removeItem(item.id)} className=''><MdDeleteOutline /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <h3 style={{ marginTop: "20px" }}>
          Subtotal: <FaRupeeSign />{subTotal.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;