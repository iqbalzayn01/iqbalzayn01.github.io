export const Portfolio = () => {
  return (
    <section className="mb-10 lg:mb-48">
      <div className="2xl:container mx-auto px-5 py-10 md:px-20">
        <div className="flex flex-wrap gap-10">
          <div>
            <h2 className=" text-4xl text-white font-medium mb-10">About</h2>
            <img src="./content/profile.png" alt="" />
          </div>
          <div className="flex-1">
            <p className="text-white mb-5">
              I am a freelancer in Frontend Development and Web Designer. I have
              a strong base in information technology. My skills include UI/UX
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
