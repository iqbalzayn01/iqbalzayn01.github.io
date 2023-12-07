import PropTypes from "prop-types";

export const Hero = ({ style }) => {
  return (
    <section className="py-80 md:py-40" style={style}>
      <div className="relative mx-auto px-5 md:px-20">
        <div className="text-white">
          <div className="flex flex-col">
            <span className="text-8xl md:text-9xl xl:text-[200px] leading-normal font-black uppercase tracking-widest">
              Iqbal
            </span>
            <span className="text-8xl md:text-9xl xl:text-[200px] leading-normal font-black uppercase tracking-widest">
              Zayyan.
            </span>
          </div>
          <h1 className="text-xl uppercase tracking-widest">
            Frontend Developer and Web Designer
          </h1>
        </div>
        <img
          src="./design/explore.svg"
          alt=""
          className="fixed w-[450px] object-cover -right-20 -bottom-32 -z-50 animate-spin-slow"
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  style: PropTypes.object.isRequired,
};
