import styles from "../../pages/myAccount/MyAccount.module.css";

function Product({ product, order }) {
  const dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div className="card-body p-4">
      <div className="row pb-2">
        <div className="col-12 col-md-6 ">
          <h5 className="bold">{product.name}</h5>
          <p className="text-muted"> Qty: {product.qty} items</p>
          <h4 className="mb-3">${dollarUSLocale.format(product.price)}</h4>
          <p className="text-muted ps-0 px-2">
            Status: <span className="text-body">{order.status}</span>
          </p>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            className="rounded-3"
            src={process.env.REACT_APP_IMAGE_PATH + product.image}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
