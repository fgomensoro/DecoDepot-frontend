import PackCard from "./PackCard";

function PackCards({ packs }) {
  return packs.products.map((product) => {
    {
      console.log(product._id);
    }
    return <PackCard key={product._id} product={product} />;
  });
}

export default PackCards;
