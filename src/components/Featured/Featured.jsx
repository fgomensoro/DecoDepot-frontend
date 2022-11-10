import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "../Slider/Slider";

function Featured() {
  const [featured, setFeatured] = useState([]);

  const axiosConfig = {
    url: "http://localhost:8000/api/featured",
    method: "GET",
  };

  const getFeatured = async () => {
    const response = await axios(axiosConfig);
    setFeatured(response.data);
  };

  useEffect(() => {
    getFeatured();
  }, []);

  console.log(featured);
  return <Slider products={featured} />;
}

export default Featured;
