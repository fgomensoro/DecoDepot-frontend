import Order from "./Order";

function Orders({ orders }) {
  const items = orders.map((order) => (
    <div key={order._id}>
      <Order order={order} />
    </div>
  ));

  return <div>{items}</div>;
}

export default Orders;
