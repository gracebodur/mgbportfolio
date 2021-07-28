import React from "react";
import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <header className="l-header" id="r-header">
        <nav className="r-nav bd-container">
          <a href="https://www.mariegracebodur.com/" className="nav_logo">
            Grace
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="https://www.mariegracebodur.com/"
                  className="nav__link"
                >
                  <i className="bx bx-home"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="https://www.mariegracebodur.com/"
                  className="nav__link"
                >
                  <i class="bx bx-user"></i>Profile
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="https://www.mariegracebodur.com/"
                  className="nav__link"
                >
                  <i class="bx bx-code-block"></i>Projects
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="https://www.mariegracebodur.com/"
                  className="nav__link"
                >
                  <i class="bx bx-book"></i>Education
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="https://www.mariegracebodur.com/"
                  className="nav__link"
                >
                  <i class="bx bx-receipt"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="https://www.mariegracebodur.com/"
                  className="nav__link"
                >
                  <i class="bx bx-briefcase-alt"></i>Experience
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="https://www.mariegracebodur.com/"
                  className="nav__link"
                >
                  <i class="bx bx-award"></i>Certificates
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="l-main bd-container">
        {/* <!-- All elements within this div, is generated in PDF --> */}
        <div className="resume" id="area-cv">
          <div className="resume__left">
            {/* <!--========== HOME ==========--> */}
            <section className="home" id="r-home">
              {/* <!-- Theme change button --> */}

              {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
            </section>

            {/* <!--========== SOCIAL ==========--> */}
            <section className="r-social r-section"></section>

            {/* <!--========== PROJECTS ==========--> */}
            <section className="r-projects r-section" id="r-projects"></section>

            {/* <!--========== EDUCATION ==========--> */}
            <section
              className="r-education r-section"
              id="r-education"
            ></section>

            {/* <!--========== SKILLS  ==========--> */}
            <section className="r-skills r-section" id="r-skills"></section>
          </div>

          <div className="resume__right">
            {/* <!--========== EXPERIENCE ==========--> */}
            <section
              className="r-experience r-section"
              id="experience"
            ></section>

            {/* <!--========== CERTIFICATES ==========--> */}
            <section
              className="r-certificate r-section"
              id="certificates"
            ></section>

            {/* <!--========== REFERENCES ==========--> */}
            <section
              className="r-references r-section"
              id="references"
            ></section>

            {/* <!--========== LANGUAGES ==========--> */}
            <section className="r-languages r-section"></section>

            {/* <!--========== INTERESTS ==========--> */}
            <section className="r-interests r-section"></section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResumePage;
