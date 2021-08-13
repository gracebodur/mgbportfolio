import React from "react";
import "./Preloader.css";
import preloader from "../../assets/preloader.svg";

const Preloader = () => <div id='preloader'><img className='preloader-svg' src={preloader} alt="preloader" /></div>

export default Preloader;
