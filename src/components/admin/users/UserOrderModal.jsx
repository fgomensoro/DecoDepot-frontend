import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Orders from "../../myAccount/Orders";
import axios from "axios";

function UserOrderModal(props) {
  const [orders, setOrders] = useState(null);
  console.log(props.user);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/users/${props.user.slug}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + props.user.token,
        },
      });
      setOrders(response.data.orders);
      console.log(orders);
    };
    getUser();
  }, []);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{orders && <Orde orders={orders} />}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserOrderModal;
