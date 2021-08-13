import React from "react";
import './ResumeBtn.css'

const ResumeBtn = () => {
  const downloadFile = () => {
    window.open(
      "https://drive.google.com/file/d/1hpMDgxWMHbwLNXlGvKFxy_3FN_JiI1wl/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <button className="download-resume-btn" onClick={downloadFile}>
      Download Resume
    </button>
  );
};

export default ResumeBtn;
