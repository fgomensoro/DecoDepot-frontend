import styles from "./CheckoutForm.module.css";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeShippingAddress } from "../../redux/shippingAddressSlice";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    dispatch(
      storeShippingAddress({
        firstName: firstName,
        lastName: lastName,
        address: address,
        apt: apt,
        city: city,
        country: country,
        state: state,
        zipCode: zipCode,
        phone: phone,
      }),
    );
    navigate("/buy");
  };

  return (
    <div>
      <h2 className={`${styles.shippingAddress} mb-4`}>Shipping address</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="firstname"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="lastname"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="Address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="Apt"
            placeholder="Apt, suite, etc."
            value={apt}
            onChange={(e) => setApt(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="zipCode"
            placeholder="ZIP Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={`${styles.links} form-group`}>
          <Link className={styles.return} to="/cart">
            <TiArrowBack className="mb-1" /> Return to cart
          </Link>
          <button to="/buy" type="submit" className={`${styles.continue} btn btn-block`}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
