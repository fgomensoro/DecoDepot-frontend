// import { useState, useEffect } from "react";
// import ItemDetail from "../../components/ItemDetail/ItemDetail";
// import axios from "axios";

// function ItemDetailContainer() {

//   const [product, setProduct] = useState([]);

//   const axiosConfig = {
//     url: `${process.env.REACT_APP_API_PORT}products/detail/${}` ,
//     method: "GET",
//   };

//   const getFeatured = async () => {
//     const response = await axios(axiosConfig);
//     setFeatured(response.data);
//   };

//   useEffect(() => {
//     getFeatured();
//   }, []);

//   return (
//     <div>
//       <ItemDetail />
//     </div>
//   );
// }

// export default ItemDetailContainer;
