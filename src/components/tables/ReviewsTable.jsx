import { useEffect, useState } from "react";
import axios from "axios";

function ReviewsTable() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}reviews`,
        method: "GET",
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      });
      console.log(response.data.reviews);
      setReviews(response.data.reviews);
    };
    getReviews();
  }, []); // eslint-disable-line

  return (
    reviews && (
      <>
        {reviews.map((review) => {
          return <p>{review.author}</p>;
        })}
      </>
    )
  );
}

export default ReviewsTable;
