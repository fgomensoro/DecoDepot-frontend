import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Reviews.module.css";

function Reviews() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/reviews`,
        method: "GET",
      });
      setReviews(response.data.reviews);
    };
    getReviews();
  }, []); // eslint-disable-line

  return (
    reviews && (
      <div className={styles.section}>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {reviews.map((review, index) => {
              if (index === 0) {
                return (
                  <div key={review._id} className="carousel-item active" data-bs-interval="3500">
                    <h2>"{review.comment}"</h2>
                    <p>{review.author}</p>
                  </div>
                );
              } else {
                return (
                  <div key={review._id} className="carousel-item" data-bs-interval="3500">
                    <h2 className={styles.comment}>"{review.comment}"</h2>
                    <p className={styles.author}>{review.author}</p>
                  </div>
                );
              }
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
  );
}

export default Reviews;
