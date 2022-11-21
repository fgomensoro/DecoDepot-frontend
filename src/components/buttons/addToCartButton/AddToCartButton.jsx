import styles from "./AddToCartButton.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartSlice";
import { toggleCart } from "../../../redux/offCanvasSlice";

function AddToCartButton({ product, btnClassName, toggle }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product._id,
        name: product.name,
        qty: 1,
        image: product.images[2],
        price: product.price,
        slug: product.slug,
      }),
    );
    if (toggle === false) {
      return;
    } else {
      dispatch(toggleCart());
    }
  };

  return (
    <button className={styles[btnClassName]} onClick={handleAddToCart}>
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
