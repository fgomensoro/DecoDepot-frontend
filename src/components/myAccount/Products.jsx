import Product from "./Product";

function Products({ order }) {
  const products = order.products;
  const items = products.map((product) => (
    <div key={product.id}>
      <Product product={product} order={order} />
    </div>
  ));

  return <div>{items}</div>;
}

export default Products;
