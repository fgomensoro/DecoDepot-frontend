import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AdminLists.module.css";
import AdminNav from "../adminNav/AdminNav";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function PacksTable() {
  const [packs, setPacks] = useState(null);

  useEffect(() => {
    const getPacks = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}packs`,
        method: "GET",
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      });
      setPacks(response.data);
    };
    getPacks();
  }, []); // eslint-disable-line

  return (
    <div>
      <Navbar />
      <div className={`${styles.body} container`}>
        <AdminNav active={"Packs"} />
        {packs && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Pack Image</th>
                <th scope="col">Product 1</th>
                <th scope="col">Product 2</th>
                <th scope="col">Product 3</th>
                <th scope="col">Product 4</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packs.map((pack, index) => {
                return (
                  <tr key={pack._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{pack.name}</td>
                    <td>{pack.bigImage}</td>
                    <td>{pack.stock}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default PacksTable;
