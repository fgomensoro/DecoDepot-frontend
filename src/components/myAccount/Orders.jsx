import Order from "./Order";

function Orders({ orders }) {
  const items = orders.map((order) => (
    <div className="d-flex flex-wrap" key={order._id}>
      <Order order={order} />
    </div>
  ));

  return <div className="d-flex flex-wrap">{items}</div>;
}

export default Orders;
