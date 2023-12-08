import PropTypes from "prop-types";
import { ConnectLinks } from "./Links";
import { Form } from "./Form";

export const Footer = ({ style }) => {
  return (
    <footer className="bg-white mx-5 md:mx-20 mb-20 rounded-lg" style={style}>
      <div className="mx-auto px-5 py-5 md:px-20 md:py-20">
        <div className="mb-10">
          <h2 className="text-5xl text-secondary font-medium mb-5">
            Let’s connect!
          </h2>
          <p className="text-secondary">
            I’m excited to collaborate and bring your ideas to life. Whether you
            have a project in mind or just want to say hello, I’d love to hear
            from you. Your message is a step towards creating something amazing!
            Let’s embark on this creative journey together and craft something
            extraordinary.
          </p>
        </div>
        <ConnectLinks />
        <h3 className="text-3xl font-medium mb-5">Message</h3>
        <Form />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  style: PropTypes.object.isRequired,
};
