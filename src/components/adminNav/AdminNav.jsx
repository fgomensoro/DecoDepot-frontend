import styles from "./AdminNav.module.css";
import { useNavigate } from "react-router-dom";

function AdminNav({ active }) {
  const navigate = useNavigate();

  const paths = ["Products", "Orders", "Packs", "Users", "Reviews"];
  return (
    <div className={`${styles.body} container`}>
      <div className={styles.adminNav}>
        {paths.map((path, index) => {
          if (path === active) {
            return (
              <button
                key={path + index}
                className={`${styles.navButton} ${styles.active}`}
                onClick={() => navigate(`/admin/${path.toLowerCase()}`)}
              >
                {path}
              </button>
            );
          } else {
            return (
              <button
                key={path + index}
                className={styles.navButton}
                onClick={() => navigate(`/admin/${path.toLowerCase()}`)}
              >
                {path}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}

export default AdminNav;
