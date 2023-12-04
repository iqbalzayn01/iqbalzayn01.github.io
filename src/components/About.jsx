export const About = () => {
  return (
    <section className="hero pt-24 mb-10 lg:mb-48">
      <div className="2xl:container mx-auto px-5 py-10 md:px-20">
        <div className="flex flex-col gap-12">
          <hgroup>
            <h3 className="text-xl font-medium tracking-wider mb-5">
              Hello!, I`m Iqbal
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-widest">
              Crafting enchanting web experiences and infusing innovation into
              every line of code.
            </h1>
          </hgroup>
          <a href="#contacts" className="lg:mb-10">
            <button className="text-base md:text-xl hover:text-dark font-semibold px-8 py-6 hover:bg-white border-2 border-white rounded-full tracking-wider">
              Let`s Connect!
            </button>
          </a>
          {/* <figure>
            <img
              src="../images/content/profile-img.png"
              alt="User Profile"
              className="object-cover w-full"
            />
          </figure> */}
        </div>
      </div>
    </section>
  );
};
