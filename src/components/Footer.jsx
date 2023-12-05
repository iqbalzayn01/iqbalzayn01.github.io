import { ConnectLinks } from "./Links";

export const Footer = () => {
  return (
    <footer className="px-5 md:px-20 mt-10 mb-20 lg:mt-20 lg:mb-40">
      <div className="2xl:container bg-white mx-auto p-5 rounded-md">
        <div className="mb-10">
          <h2 className="text-2xl text-secondary font-medium mb-5">
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
      </div>
    </footer>
  );
};
