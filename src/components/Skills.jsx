import PropTypes from "prop-types";

export const Skills = ({ style }) => {
  const dataSkills = [
    {
      name: "Core",
      skillList: [
        "HTML",
        "CSS",
        "Javascript",
        "Web Design",
        "Responsive Design",
      ],
    },
    {
      name: "Libraries & Frameworks",
      skillList: [
        "React Js",
        "Tailwindcss",
        "Express Js",
        "Node Js",
        "MongoDB",
      ],
    },
    {
      name: "Tools & PLatforms",
      skillList: ["Figma", "Git", "Vercel"],
    },
  ];
  return (
    <section className="mx-auto px-5 py-24 md:px-32" style={style}>
      <div className="w-full flex flex-col text-white">
        <div className="border-white border-b-[0.4px] py-12">
          <h2 className="text-5xl font-extrabold mb-2">Skills</h2>
          <p className="text-xl">Current areas of proficiency</p>
        </div>
        {dataSkills.map((skillGroup) => (
          <div
            key={skillGroup.name}
            className="flex items-start justify-between hover:bg-third border-white border-b-[0.4px] py-12"
          >
            <h2 className="text-4xl mb-2">{skillGroup.name}</h2>
            <div className="w-[30%] flex flex-wrap gap-5">
              {skillGroup.skillList.map((skillItem) => (
                <ul key={skillItem}>
                  <li className="btn-cta text-secondary font-semibold">
                    {skillItem}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Skills.propTypes = {
  style: PropTypes.object.isRequired,
};
