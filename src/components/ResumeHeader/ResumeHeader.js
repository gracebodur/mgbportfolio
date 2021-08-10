import React, { useState } from "react";
import "./ResumeHeader.css";

const ResumeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [removeNavLink, setRemoveNavLink] = useState(true);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="l-header" id="r-header">
      <nav className="r-nav bd-container">
        <a href="https://www.mariegracebodur.com/" className="nav__logo">
          MGB
        </a>
        <div
          className={`${isMenuOpen ? "show__menu" : "nav__menu"}`}
          id="nav-menu"
        >
          <ul className="nav__list r-ul">
            <li className="nav__item" onClick={setRemoveNavLink}>
              <a href="" className={`${removeNavLink ? "nav__link" : "remove-link"}`}>
                <i className="bx bx-home nav__icon" ></i>Home
              </a>
            </li>
            <li className="nav__item" onClick={setRemoveNavLink}>
              <a href="" className={`${removeNavLink ? "nav__link" : "remove-link"}`}>
                <i className="bx bx-user nav__icon"></i>Profile
              </a>
            </li>
            <li className="nav__item" onClick={setRemoveNavLink}>
              <a href="" className={`${removeNavLink ? "nav__link" : "remove-link"}`}>
                <i className="bx bx-code-block nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item" onClick={setRemoveNavLink}>
              <a href="" className={`${removeNavLink ? "nav__link" : "remove-link"}`}>
                <i className="bx bx-book nav__icon"></i>Education
              </a>
            </li>
            <li className="nav__item" onClick={setRemoveNavLink}>
              <a href="" className={`${removeNavLink ? "nav__link" : "remove-link"}`}>
                <i className="bx bx-receipt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item" onClick={setRemoveNavLink}>
              <a href="" className={`${removeNavLink ? "nav__link" : "remove-link"}`}>
                <i className="bx bx-briefcase-alt nav__icon"></i>Experience
              </a>
            </li>
            <li className="nav__item" onClick={setRemoveNavLink}>
              <a href="" className={`${removeNavLink ? "nav__link" : "remove-link"}`}>
                <i className="bx bx-award nav__icon"></i>Certificates
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default ResumeHeader;
