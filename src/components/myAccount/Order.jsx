import styles from "./Orders.module.css";

import Products from "./Products";
import { format } from "date-fns";

function order({ order }) {
  return (
    <div className={`${styles.orderWrapper} `}>
      <div className={`${styles.cardStepper} card `} style={{ borderRadius: 16 }}>
        <div className="card-header p-4 ">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="text-muted mb-2">
                Order ID: <span className="fw-bold text-body">{order._id}</span>
              </p>
            </div>
            <div className="col-12 col-lg-6 ">
              <p className="text-muted mb-2">
                Place On:{" "}
                <span className="fw-bold text-body">
                  {format(new Date(order.createdAt), "dd/MM/yyyy")}
                </span>
              </p>
            </div>
          </div>
        </div>
        <Products order={order} />

        <div className="card-footer p-4">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <h5 className="fw-normal mb-0">
                <small>Track</small>
              </h5>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <h5 className="fw-normal mb-0">
                <small>Cancel</small>
              </h5>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <h5 className="fw-normal mb-0">
                <small>Pre-pay</small>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default order;
