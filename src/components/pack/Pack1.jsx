import styles from "./Pack.module.css";
import PackCards from "./PackCards";
import { useState, useEffect } from "react";
import axios from "axios";

function Pack() {
  const [packs, setPacks] = useState(null);

  const axiosConfig = {
    method: "GET",
    url: "http://localhost:8000/packs",
  };

  useEffect(() => {
    const getPacks = async () => {
      const response = await axios(axiosConfig);
      setPacks(response.data);
    };
    getPacks(); // eslint-disable-next-line
  }, []);

  return (
    packs && (
      <div className={`${styles.bigContain} container`}>
        <div className="d-flex">
          <h3 className={styles.title}>{packs[0].name}</h3>
          <hr className={styles.line} />
        </div>
        <div className={`${styles.comboContain} row`}>
          <div className="col-12 col-lg-6">
            <img
              className={styles.bigImage}
              src={`${process.env.REACT_APP_IMAGE_PATH}${packs[0].bigImage}`}
              alt="comboBigImage"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-wrap">
              <PackCards packs={packs[0]} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Pack;
