import { useState } from "react";
import styles from "./Cookpit.module.css";
import ProductsTable from "../../components/tables/ProductsTable";
import OrdersTable from "../../components/tables/OrdersTable";
import PacksTable from "../../components/tables/PacksTable";
import UsersTable from "../../components/tables/UsersTable";
import ReviewsTable from "../../components/tables/ReviewsTable";

function Cookpit() {
  const [table, setTable] = useState(null);

  return (
    <div className={`${styles.body} container`}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setTable(1)}>
          Products
        </button>
        <button className={styles.button} onClick={() => setTable(2)}>
          Orders
        </button>
        <button className={styles.button} onClick={() => setTable(3)}>
          Packs
        </button>
        <button className={styles.button} onClick={() => setTable(4)}>
          Users
        </button>
        <button className={styles.button} onClick={() => setTable(5)}>
          Reviews
        </button>
      </div>
      <div className={styles.tables}>
        {table === 1 && <ProductsTable />}
        {table === 2 && <OrdersTable />}
        {table === 3 && <PacksTable />}
        {table === 4 && <UsersTable />}
        {table === 5 && <ReviewsTable />}
      </div>
    </div>
  );
}

export default Cookpit;
