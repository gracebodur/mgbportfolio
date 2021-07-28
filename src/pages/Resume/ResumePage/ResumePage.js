import React from "react";
import ResumeHeader from "../../../components/ResumeHeader/ResumeHeader";
import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <ResumeHeader />
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
