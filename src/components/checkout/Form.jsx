import styles from "./Form.module.css";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeShippingAddress } from "../../redux/shippingAddressSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CheckoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [address, setAddress] = useState(user.address);
  const [apt, setApt] = useState("3");
  const [city, setCity] = useState("Montevideo");
  const [country, setCountry] = useState("Uruguay");
  const [state, setState] = useState("Montevideo");
  const [zipCode, setZipCode] = useState("1234");
  const [phone, setPhone] = useState(user.phoneNumber);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !address ||
      !apt ||
      !city ||
      !country ||
      !state ||
      !zipCode ||
      !phone
    ) {
      setError(true);
      return false;
    }

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
    <div className={styles.formWrapper}>
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
          {error && !firstName && <span className={styles.message}>Required field</span>}
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
        {error && !lastName && <span className={styles.message}>Required field</span>}
        <div className="form-group">
          <input
            type="text"
            className={`${styles.item} form-control`}
            id="Address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {error && !address && <span className={styles.message}>Required field</span>}
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
          {error && !apt && <span className={styles.message}>Required field</span>}
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
          {error && !city && <span className={styles.message}>Required field</span>}
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
          {error && !state && <span className={styles.message}>Required field</span>}
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
          {error && !country && <span className={styles.message}>Required field</span>}
        </div>

        <div className="form-group">
          <input
            type="number"
            className={`${styles.item} form-control`}
            id="zipCode"
            placeholder="ZIP Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          {error && !zipCode && <span className={styles.message}>Required field</span>}
        </div>
        <div className="form-group">
          <input
            type="number"
            className={`${styles.item} form-control`}
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {error && !phone && <span className={styles.message}>Required field</span>}
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
