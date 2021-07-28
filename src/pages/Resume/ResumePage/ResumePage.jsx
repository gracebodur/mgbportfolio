import React from "react";
import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <header className="l-header" id="r-header"></header>
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
            <section className="social section"></section>

            {/* <!--========== PROJECTS ==========--> */}
            <section className="projects section" id="r-projects"></section>

            {/* <!--========== EDUCATION ==========--> */}
            <section className="education section" id="education"></section>

            {/* <!--========== SKILLS  ==========--> */}
            <section className="skills section" id="r-skills"></section>
          </div>

          <div className="resume__right">
            {/* <!--========== EXPERIENCE ==========--> */}
            <section className="experience section" id="experience"></section>

            {/* <!--========== CERTIFICATES ==========--> */}
            <section className="certificate section" id="certificates"></section>

            {/* <!--========== REFERENCES ==========--> */}
            <section className="references section" id="references"></section>

            {/* <!--========== LANGUAGES ==========--> */}
            <section className="languages section"></section>

            {/* <!--========== INTERESTS ==========--> */}
            <section className="interests section"></section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResumePage;
