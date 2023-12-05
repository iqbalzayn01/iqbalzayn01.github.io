export const About = () => {
  return (
    <section className="mb-20 lg:mb-48">
      <div className="2xl:container mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <figure>
            <img
              src="./content/profile.png"
              alt=""
              className="object-cover w-full rounded-md"
            />
          </figure>
          <div className="w-full md:w-1/2">
            <h2 className=" text-2xl text-white font-medium mb-10">About</h2>
            <p className="text-white mb-5">
              I am a freelancer in Frontend Development and Web Design. I have a
              strong base in information technology. My skills include UI/UX
              Design, Figma, Responsive Design, HTML, CSS, Tailwind, Javascript,
              ExpressJS, NodeJS, ReactJS, and Basic Back-End.
            </p>
            <p className="flex-1 w-full text-white">
              I really enjoy working with the latest technologies and Javascript
              frameworks to create innovative and responsive web applications.
              Besides that, I also enjoy learning new things, adventuring, and
              sharing my knowledge with the technology community. If you are
              interested in collaborating or discussing an interesting project,
              don’t hesitate to contact me. I am always open to new
              opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
