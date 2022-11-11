import { useEffect, useState } from "react";
import axios from "axios";

function PacksTable() {
  const [packs, setPacks] = useState(null);

  useEffect(() => {
    const getPacks = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}combos`,
        method: "GET",
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      });
      console.log(response.data.combos);
      setPacks(response.data.combos);
    };
    getPacks();
  }, []); // eslint-disable-line

  return (
    packs && (
      <>
        {packs.map((pack) => {
          return <p>{pack.name}</p>;
        })}
      </>
    )
  );
}

export default PacksTable;
