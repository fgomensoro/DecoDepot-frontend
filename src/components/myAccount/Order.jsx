import styles from "../../pages/myAccount/MyAccount.module.css";
import Products from "./Products";
// import Time from "react-pure-time";

function order({ order }) {
  return (
    <div className="container">
      <div className="row">
        <div className={`${styles.cont1} col-md-10 col-lg-8 col-xl-6`}>
          <div className={`${styles.cardStepper} card-stepper card`} style={{ borderRadius: 16 }}>
            <div className="card-header p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-2">
                    Order ID: <span className="fw-bold text-body">{order._id}</span>
                  </p>
                  <div className="text-muted mb-0">
                    Place On:{" "}
                    <span className="fw-bold text-body">
                      {/* <Time value={order.createdAt} format="d.m.Y" /> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Products order={order} />

            <div className="card-footer p-4">
              <div className="d-flex justify-content-between">
                <h5 className="fw-normal mb-0">
                  <small>Track</small>
                </h5>
                <div className="border-start h-100"></div>
                <h5 className="fw-normal mb-0">
                  <small>Cancel</small>
                </h5>
                <div className="border-start h-100"></div>
                <h5 className="fw-normal mb-0">
                  <small>Pre-pay</small>
                </h5>
                <div className="border-start h-100"></div>
                <h5 className="fw-normal mb-0">
                  <a href="#!" className="text-muted">
                    <i className="fas fa-ellipsis-v"></i>
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default order;
