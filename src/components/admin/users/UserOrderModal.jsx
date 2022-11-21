import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "../adminCSS/AdminCSS.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

function UserOrderModal(props) {
  const [orders, setOrders] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/users/${props.user.slug}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setOrders(response.data.orders);
    };
    getUser();
  }, []);
  console.log(orders);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Orders</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-wrap justify-content-around">
          {orders &&
            orders.map((order) => {
              console.log(order);
              return (
                <div className={styles.orderInfo}>
                  <p>Products: {order.products.length}</p>
                  <p>Status: {order.status}</p>
                  <p>Created at: {order.createdAt}</p>
                  <p>Total: {order.total}</p>
                </div>
              );
            })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserOrderModal;
