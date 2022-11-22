import Product from "./Product";

function Products({ order }) {
  const products = order.products;
  const items = products.map((product) => (
    <Product key={product.id} product={product} order={order} />
  ));

  return <div>{items}</div>;
}

export default Products;
