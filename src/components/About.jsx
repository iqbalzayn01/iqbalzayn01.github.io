import PropTypes from "prop-types";

export const About = ({ style }) => {
  return (
    <section className="py-20 md:py-40" style={style}>
      <div className="mx-auto px-5 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h2 className=" text-8xl text-white mb-10">Hello,</h2>
            <p className=" text-xl text-white mb-5 tracking-widest">
              I’m a Frontend Developer and Web Designer. I’ve gained experience
              by being a freelancer since 2020. I specialize in creating
              visually appealing and user-friendly websites. With my skills in
              web development and design tools like Figma, I strive to create
              digital experiences that help businesses achieve their goals. I’m
              enthusiastic about staying informed on the latest trends and
              eagerly embracing new technologies and frameworks.
            </p>
            {/* <p className="flex-1 w-full text-xl  text-white">
              If you are interested in collaborating or discussing an
              interesting project, don’t hesitate to contact me. I am always
              open to new opportunities!
            </p> */}
          </div>
          <img
            src="./content/profile-2.png"
            alt=""
            className="object-cover w-full md:w-1/2"
          />
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  style: PropTypes.object.isRequired,
};
