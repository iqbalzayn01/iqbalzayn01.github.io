export default function Experiences() {
  const dataExperiences = [
    {
      name: "PT. Telekomunikasi Indonesia, Tbk",
      position: "Internship",
      date: "August 2023 - October 2023",
    },
    {
      name: "Frontend Developer",
      position: "Freelance",
      date: "December 2021 - Now",
    },
    {
      name: "Web Designer",
      position: "Freelance",
      date: "December 2020 - Now",
    },
  ];
  return (
    <section className="mx-auto px-5 py-24 md:px-32">
      <div className="w-full flex flex-col text-white">
        <div className="border-white border-b-[0.4px] py-12">
          <h2 className="text-5xl font-extrabold mb-2">Experiences</h2>
        </div>
        {dataExperiences.map((experience) => (
          <div
            key={experience.name}
            className="flex items-start justify-between hover:bg-third border-white border-b-[0.4px] py-12"
          >
            <div className="flex flex-col gap-2">
              <p className="text-lg">{experience.position}</p>
              <h2 className="text-4xl font-medium">{experience.name}</h2>
            </div>
            <p className="text-lg">{experience.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
