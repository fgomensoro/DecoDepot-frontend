import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import axios from "axios";
import SuggestionItem from "./SuggestionItem";

function Cart() {
  const cart = useSelector((state) => state.cart.items);

  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => {
    const getSuggestions = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}products`,
        method: "GET",
      });
      console.log(response.data.products);
      setSuggestions(response.data.products);
    };

    getSuggestions();
  }, []);

  if (cart.length === 0) {
    return (
      <div>
        <h1>Your cart</h1>
        <p>Your cart is empty, give it some love!</p>
        {suggestions &&
          suggestions.map((suggestion, index) => {
            return (
              <div key={index} className="mx-4">
                <SuggestionItem suggestion={suggestion} />
              </div>
            );
          })}
      </div>
    );
  } else {
    return (
      cart && (
        <div>
          <h1>Your cart</h1>

          {cart && cart.map((product, index) => <CartItem key={index} product={product} />)}
        </div>
      )
    );
  }

  /*  return (
    cart && (
      <div>
        <h1>Your cart</h1>
        <p>Your cart is empty, give it some love!</p>

        {cart && cart.map((product, index) => <CartItem key={index} product={product} />)}
      </div>
    )
  ); */
}

export default Cart;

(movie, index) => <SingleMoviePoster movie={movie} key={index} setModal={setModal} />;
