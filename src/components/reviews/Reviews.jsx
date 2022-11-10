import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Reviews.module.css";

function Reviews() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      console.log("axios");
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}reviews/`,
        method: "GET",
      });
      setReviews(response.data.reviews);
      console.log(response.data.reviews);
    };
    getReviews();
    console.log("useEffect");
  }, []); // eslint-disable-line

  return (
    reviews && (
      <div className={styles.section}>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            {reviews.map((review, index) => {
              if (index === 0) {
                return (
                  <div class="carousel-item active" data-bs-interval="5000">
                    <h2>"{review.comment}"</h2>
                    <p>{review.author}</p>
                  </div>
                );
              } else {
                return (
                  <div class="carousel-item" data-bs-interval="5000">
                    <h2 className={styles.comment}>"{review.comment}"</h2>
                    <p className={styles.author}>{review.author}</p>
                  </div>
                );
              }
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
  );
}

export default Reviews;
