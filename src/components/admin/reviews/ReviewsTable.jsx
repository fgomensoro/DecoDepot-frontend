import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "../adminCSS/AdminCSS.module.css";
import AdminNav from "../adminNav/AdminNav";

import Footer from "../../footer/Footer";

function ReviewsTable() {
  const user = useSelector((state) => state.user);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/reviews`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setReviews(response.data.reviews);
    };
    getReviews();
  }, []); // eslint-disable-line

  return (
    <div className={`${styles.body} row`}>
      <div className="col-4 col-md-2">
        <AdminNav active={"Reviews"} />
      </div>
      <div className="col-8 col-md-10">
        {reviews && (
          <table className={`${styles.scrollX} table`}>
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
                    <th scope="row">{index + 1}</th>
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
    </div>
  );
}

export default ReviewsTable;
