import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  // ✅ Calculate totals just once
  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} style={{ cursor: "pointer", color: "red" }}>x</p>
              </div>
            );
          } else return null;
        })}

        {/* ✅ Show message if cart is empty */}
        {Object.values(cartItems).every(quantity => quantity === 0) && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>Your cart is empty.</p>
        )}
      </div>

      <hr />

      <div className="cart-bottom">
        {/* ✅ Cart Total Section */}
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{total}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} disabled={subtotal === 0}>
            Proceed To CheckOut
          </button>
        </div>

        {/* ✅ Promocode Section */}
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
