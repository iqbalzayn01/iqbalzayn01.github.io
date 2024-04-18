import { ConnectLinks } from "../Links";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto px-5 py-24 md:px-32">
      <div className="bg-white p-10 rounded-lg">
        <div className="mb-10">
          <h2 className="text-5xl text-secondary font-medium mb-5">
            Let’s <span className="text-primary">Connect!</span>
          </h2>
          <p className="text-secondary text-xl">
            I’m excited to collaborate and bring your ideas to life. Whether you
            have a project in mind or just want to say hello, I’d love to hear
            from you. Your message is a step towards creating something amazing!
            Let’s embark on this creative journey together and craft something
            extraordinary.
          </p>
        </div>
        <button type="button" className="connect-item mb-5">
          Email: miqzayudevstudio@gmail.com
        </button>
        <ConnectLinks />
      </div>
    </footer>
  );
}
