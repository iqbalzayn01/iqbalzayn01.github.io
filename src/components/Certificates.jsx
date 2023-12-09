import PropTypes from "prop-types";

export const Certificates = ({ style }) => {
  const dataCertificates = [
    {
      name: "Front-End Web Development",
      issuingOrganization: "dicoding.com",
      url: "https://www.dicoding.com/certificates/0LZ0238VKX65",
      year: 2023,
    },
    {
      name: "JavaScript (Basic)",
      issuingOrganization: "hackerrank",
      url: "https://www.hackerrank.com/certificates/09077bb47daf",
      year: 2023,
    },
    {
      name: "Build Web Applications with React",
      issuingOrganization: "dicoding.com",
      url: "https://www.dicoding.com/certificates/L4PQQM0LVPO1",
      year: 2023,
    },
    {
      name: "Full-Stack Web Designer",
      issuingOrganization: "buildwithangga.com",
      url: "https://drive.google.com/file/d/1qucsPrsej_pLTsVpmlB22GgS_pj63c0_/view?usp=sharing",
      year: 2021,
    },
  ];
  return (
    <section className="mx-auto px-5 py-24 md:px-32" style={style}>
      <div className="w-full flex flex-col text-white">
        <div className="border-white border-b-[0.4px] py-12">
          <h2 className="text-5xl font-extrabold mb-2">Certificates</h2>
        </div>
        {dataCertificates.map((certificate) => (
          <a
            href={certificate.url}
            key={certificate.name}
            target="_blank"
            rel="noreferrer"
            className="flex items-start justify-between hover:bg-third border-white border-b-[0.4px] py-12"
          >
            <div className="flex flex-col gap-2">
              <p className="text-lg">{certificate.issuingOrganization}</p>
              <h2 className="text-4xl font-medium">{certificate.name}</h2>
            </div>
            <p className="text-lg">{certificate.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

Certificates.propTypes = {
  style: PropTypes.object.isRequired,
};
