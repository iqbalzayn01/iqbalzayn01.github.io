export const Links = () => {
  const dataLinks = [
    { link: "About Me", url: "#about" },
    { link: "Portfolio", url: "#portfolio" },
    { link: "Contact", url: "#contact" },
  ];
  return (
    <ul className="flex flex-col items-start gap-10 xl:gap-20">
      {dataLinks.map((linkItem) => (
        <li key={linkItem.link}>
          <a
            href={linkItem.url}
            className="text-2xl text-secondary hover:font-bold outline-none"
          >
            {linkItem.link}
          </a>
        </li>
      ))}
    </ul>
  );
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
            className="font-semibold"
          >
            {connectItem.link}
          </a>
        </li>
      ))}
    </ul>
  );
};
