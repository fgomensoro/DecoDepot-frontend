import Product from "./Product";

function Products({ cart }) {
  const items = cart.items.map((item) => (
    <div key={item.id}>
      <Product item={item} />
    </div>
  ));

  return <div>{items}</div>;
}

export default Products;
