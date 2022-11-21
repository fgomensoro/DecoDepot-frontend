import Order from "./Order";

function Orders({ orders }) {
  const items = orders.map((order) => <Order key={order._id} order={order} />);

  return <div className="d-flex flex-wrap">{items}</div>;
}

export default Orders;
