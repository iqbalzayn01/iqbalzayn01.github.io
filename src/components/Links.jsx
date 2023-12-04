export const Links = () => {
  return (
    <ul className="hidden md:flex items-center justify-end gap-5 xl:gap-20">
      <li>
        <a href="#about" data-i18n="links.aboutme" className="text-white">
          About Me
        </a>
      </li>
      <li>
        <a href="#portfolio" className="text-white">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#contacts" data-i18n="links.contacts" className="text-white">
          Contact
        </a>
      </li>
    </ul>
  );
};
