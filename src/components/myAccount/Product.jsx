import styles from "../../pages/myAccount/MyAccount.module.css";

function Product({ product, order }) {
  const dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div className="card-body p-4">
      <div className="d-flex flex-row pb-2">
        <div className="flex-fill">
          <h5 className="bold">{product.name}</h5>
          <p className="text-muted"> Qty: {product.qty} items</p>
          <h4 className="mb-3">${dollarUSLocale.format(product.price)}</h4>
          <p className="text-muted">
            Status: <span className="text-body">{order.status}</span>
          </p>
        </div>
        <div>
          <img
            className="align-self-center img-fluid rounded-3"
            src={process.env.REACT_APP_IMAGE_PATH + product.image}
            width="250"
            id={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
