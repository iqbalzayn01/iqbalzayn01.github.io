import PropTypes from "prop-types";

export const CardItem = ({ id, name, imageName, url }) => {
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
};

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
