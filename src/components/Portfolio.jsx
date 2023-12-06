import PropTypes from "prop-types";
import { CardItem } from "./CardItem";
import portfolioData from "../data/portfolioData.json";

export const Portfolio = ({ style }) => {
  return (
    <section
      id="portfolio"
      className="mt-10 mb-20 lg:mt-20 lg:mb-40"
      style={style}
    >
      <div className="mx-auto px-5 md:px-20">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl text-white font-medium tracking-wider">
            Portfolio
          </h2>
          <p className="md:text-xl text-white font-medium tracking-wider mb-5">
            Crafting Compelling Digital Journeys with Code and Creativity.
          </p>
          <div className="cards">
            {portfolioData.map((item) => (
              <CardItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  style: PropTypes.object.isRequired,
};
