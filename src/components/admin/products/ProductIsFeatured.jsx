import { useState } from "react";
import axios from "axios";

function ProductIsFeatured({ user, product, getProducts }) {
  const [isFeatured, setIsFeatured] = useState(product.featured);

  const handleIsFeatured = (value) => {
    setIsFeatured(!isFeatured);
    const updateIsFeatured = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/products/${product._id}`,
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + user.token,
        },
        data: {
          isFeatured: value,
          updateIsFeatured: true,
        },
      });
      console.log(response.data.msg);

      getProducts();
    };
    updateIsFeatured();
  };

  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        name="featured"
        checked={isFeatured}
        onChange={() => handleIsFeatured(!isFeatured)}
      />
    </div>
  );
}

export default ProductIsFeatured;
