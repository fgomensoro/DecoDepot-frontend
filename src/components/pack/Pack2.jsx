import styles from "./Pack.module.css";
import PackCards from "./PackCards";
import { useState, useEffect } from "react";
import axios from "axios";

function Pack() {
  const [packs, setPacks] = useState(null);

  const axiosConfig = {
    method: "GET",
    url: `${process.env.REACT_APP_API_URL}/packs`,
  };

  useEffect(() => {
    const getPacks = async () => {
      try {
        const response = await axios(axiosConfig);
        setPacks(response.data);
      } catch (error) {
        console.log(error.data);
      }
    };
    getPacks(); // eslint-disable-next-line
  }, []);

  return (
    packs && (
      <div className={`${styles.bigContain} container`}>
        <div className="d-flex">
          <h3 className={styles.title}>{packs[1].name}</h3>
          <hr className={styles.line} />
        </div>
        <div className={`${styles.comboContain2} row`}>
          <div className={`${styles.cards} col-12 col-lg-6`}>
            <div className={`${styles.packCards} d-flex flex-wrap`}>
              <PackCards packs={packs[1]} />
            </div>
          </div>
          <div className={`${styles.cards} col-12 col-lg-6 text-center`}>
            <img
              className={`${styles.bigImage}`}
              src={`${process.env.REACT_APP_IMAGE_PATH}${packs[1].bigImage}`}
              alt="comboBigImage"
            />

            <img
              className={`${styles.bigImage} ${styles.bigImageSecondary}`}
              src={`${process.env.REACT_APP_IMAGE_PATH}${packs[1].bigImage}`}
              alt="comboBigImage"
            />
          </div>
        </div>
      </div>
    )
  );
}

export default Pack;
