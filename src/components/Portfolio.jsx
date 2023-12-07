import PropTypes from "prop-types";
import { CardItem } from "./CardItem";
import portfolioData from "../data/portfolioData.json";

export const Portfolio = ({ style }) => {
  return (
    <section id="portfolio" style={style}>
      <div className="mx-auto px-5 py-5 md:px-20 md:py-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-5xl text-white font-medium tracking-wider">
            Portfolio
          </h2>
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
