import Painting from "./Painting";
import { PropTypes } from "prop-types";
export default function PaintingList({ items }) {
  return (
    <ul>
      {items.map(({ url, title, author, price, quantity, id }) => (
        <li key={id}>
          <Painting
            imageUrl={url}
            title={title}
            author={author.tag}
            profileUrl={author.url}
            price={price}
            quantity={quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
