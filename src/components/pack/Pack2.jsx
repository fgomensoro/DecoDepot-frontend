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

  const randomNumber = Math.floor(Math.random() * (3 - 2 + 1) + 2);

  return (
    packs && (
      <div className={`${styles.bigContain} container`}>
        <div className="d-flex">
          <h3 className={styles.title}>{packs[randomNumber].name}</h3>
          <hr className={styles.line} />
        </div>
        <div className={`${styles.comboContain2} row`}>
          <div className={`${styles.cards} col-12 col-lg-4`}>
            <div className={`${styles.packCards} d-flex flex-wrap`}>
              <PackCards packs={packs[randomNumber]} />
            </div>
          </div>
          <div className={`${styles.cards} col-12 col-lg-8 text-center`}>
            <img
              className={`${styles.bigImage}`}
              src={`${process.env.REACT_APP_IMAGE_PATH}${packs[randomNumber].bigImage}`}
              alt="comboBigImage"
            />

            <img
              className={` ${styles.bigImageSecondary}`}
              src={`${process.env.REACT_APP_IMAGE_PATH}${packs[randomNumber].bigImage2}`}
              alt="comboBigImage"
            />
          </div>
        </div>
      </div>
    )
  );
}

export default Pack;
