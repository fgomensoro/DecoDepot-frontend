import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import _ from "lodash";
function Cart() {
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
  console.log(_.isEmpty(cart));
  return (
    cart && (
      <div>
        <h1>Your cart</h1>
        <p>Your cart is empty, give it some love!</p>

        {cart && cart.map((product, index) => <CartItem key={index} product={product} />)}
      </div>
    )
  );
}

export default Cart;

(movie, index) => <SingleMoviePoster movie={movie} key={index} setModal={setModal} />;
