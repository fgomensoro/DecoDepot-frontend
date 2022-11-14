import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../adminCSS/AdminCSS.module.css";
import AdminNav from "../adminNav/AdminNav";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

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
      setReviews(response.data.reviews);
    };
    getReviews();
  }, []); // eslint-disable-line

  return (
    <div>
      <Navbar />
      <div className={`${styles.body} container`}>
        <AdminNav active={"Reviews"} />
        {reviews && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Comment</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => {
                return (
                  <tr key={review._id}>
                    <th scope="row">{index}</th>
                    <td>{review.author}</td>
                    <td>{review.comment}</td>
                    <td></td>
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

export default ReviewsTable;
