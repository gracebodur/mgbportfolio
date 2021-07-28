import React from "react";
import './ResumeHeader.css'

const ResumeHeader = () => {
  return (
    <header className="l-header" id="r-header">
      <nav className="r-nav bd-container">
        <a href="https://www.mariegracebodur.com/" className="nav_logo">
          Grace
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list r-ul">
            <li className="nav__item">
              <a href="https://www.mariegracebodur.com/" className="nav__link">
                <i className="bx bx-home"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="https://www.mariegracebodur.com/" className="nav__link">
                <i class="bx bx-user"></i>Profile
              </a>
            </li>
            <li className="nav__item">
              <a href="https://www.mariegracebodur.com/" className="nav__link">
                <i class="bx bx-code-block"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="https://www.mariegracebodur.com/" className="nav__link">
                <i class="bx bx-book"></i>Education
              </a>
            </li>
            <li className="nav__item">
              <a href="https://www.mariegracebodur.com/" className="nav__link">
                <i class="bx bx-receipt"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="https://www.mariegracebodur.com/" className="nav__link">
                <i class="bx bx-briefcase-alt"></i>Experience
              </a>
            </li>
            <li className="nav__item">
              <a href="https://www.mariegracebodur.com/" className="nav__link">
                <i class="bx bx-award"></i>Certificates
              </a>
            </li>
          </ul>
        </div>
        <div className='nav__toggle' id='nav-toggle'>
        <i class='bx bx-grid-alt' ></i>
        </div>
      </nav>
    </header>
  );
};

export default ResumeHeader;
