import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART } from "../Redux/actions";

const CartContainer = ({ cart = [], onClearCart }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            <span>
              $
              {(cart.reduce((acc, item) => {
                return acc += item.amount * item.price;
              }, 0)).toFixed(2)}
            </span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={onClearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  onClearCart: () => dispatch({ type: CLEAR_CART }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
