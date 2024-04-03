import PropTypes from "prop-types";

export default function CardItem({ id, name, imageName, url }) {
  return (
    <a
      key={id}
      href={url}
      target="_blank"
      className="card-item"
      rel="noreferrer"
    >
      <figure className="relative h-full overflow-hidden transition-all duration-500 ease-in-out rounded-lg">
        <img
          src={`./content/portfolio/${imageName}`}
          alt={name}
          className="object-cover w-full h-full transition-zoom"
        />
      </figure>
    </a>
  );
}

CardItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageName: PropTypes.string,
  url: PropTypes.string,
};
