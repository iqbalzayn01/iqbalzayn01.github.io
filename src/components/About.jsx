import PropTypes from "prop-types";

export const About = ({ style }) => {
  return (
    <section className="py-20 md:py-40" style={style}>
      <div className="mx-auto px-5 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h2 className=" text-4xl text-white font-medium mb-10">Hello</h2>
            <p className=" text-xl text-white mb-5">
              I am a freelancer in Frontend Development and Web Design. I have a
              strong base in information technology. My skills include UI/UX
              Design, Figma, Responsive Design, HTML, CSS, Tailwind, Javascript,
              ExpressJS, NodeJS, ReactJS, and Basic Back-End.
            </p>
            <p className="flex-1 w-full text-xl  text-white">
              I really enjoy working with the latest technologies and Javascript
              frameworks to create innovative and responsive web applications.
              Besides that, I also enjoy learning new things, adventuring, and
              sharing my knowledge with the technology community. If you are
              interested in collaborating or discussing an interesting project,
              don’t hesitate to contact me. I am always open to new
              opportunities!
            </p>
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
