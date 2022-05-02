import PropTypes from "prop-types";
import s from "./Painting.module.css";

export default function Painting({
  imageUrl,
  title,
  author,
  profileUrl,
  price,
  quantity,
}) {
  return (
    <div className={s.container}>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price}$</p>
      <p>Availability: {quantity > 10 ? "Enough" : "Running out"}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
