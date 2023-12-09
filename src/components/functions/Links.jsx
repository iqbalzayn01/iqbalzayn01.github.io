import PropTypes from "prop-types";

export const Links = ({ className, setMenu }) => {
  const dataLinks = [
    { link: "Portfolio", url: "#portfolio" },
    { link: "Blog", url: "#blog" },
    { link: "Contact", url: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenu(false);
  };
  return (
    <ul
      className={`flex flex-col md:flex-row md:items-center gap-16 ${className}`}
    >
      {dataLinks.map((linkItem) => (
        <li key={linkItem.link}>
          <a
            href={linkItem.url}
            className="text-4xl md:text-xl text-white hover:font-extrabold transition-basic outline-none"
            onClick={handleLinkClick}
          >
            {linkItem.link}
          </a>
        </li>
      ))}
    </ul>
  );
};

Links.propTypes = {
  className: PropTypes.string,
  setMenu: PropTypes.func,
};

export const ConnectLinks = () => {
  const dataConnectLinks = [
    // { link: "Email", url: "#email" },
    {
      link: "Linkedin",
      url: "https://www.linkedin.com/in/muhammad-iqbal-zayyan-abiyyu-285b3821a/",
    },
    { link: "Instagram", url: "https://www.instagram.com/iqbalzayn01/" },
    { link: "Github", url: "https://github.com/iqbalzayn01" },
    { link: "Dribbble", url: "https://dribbble.com/iqbalzayn01" },
    { link: "Uplabs", url: "https://www.uplabs.com/iqbalzayn01" },
  ];
  return (
    <ul className="flex flex-wrap items-center gap-5 mb-12">
      {dataConnectLinks.map((connectItem) => (
        <li key={connectItem.link} className="connect-item">
          <a
            href={connectItem.url}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-semibold"
          >
            {connectItem.link}
          </a>
        </li>
      ))}
    </ul>
  );
};
