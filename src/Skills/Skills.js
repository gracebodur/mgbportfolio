import React from 'react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import './Skills.css'

function Skills () {
    return (
        <Element id='skills' name='skills'>
            <div className='intro-skills text-center'>
                <h4 className='intro-skills_title'>Skills and Tools</h4>
            </div>
            <div className='container text-center'>
                <ul className='d-flex text-center justify-content-between list-inline'>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-html5-plain skills-icon html"></i>
                            <p className='small'>HTML5</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-css3-plain devicon skills-icon"></i>
                            <p>CSS3</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-javascript-plain devicon skills-icon"></i>
                            <p>Javascript</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-jquery-plain devicon skills-icon"></i>
                            <p>JQuery</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-react-original devicon skills-icon"></i>
                            <p>React</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-express-original devicon skills-icon"></i>
                            <p>Express</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-postgresql-plain devicon skills-icon"></i>
                            <p>PostgreSQL</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-nodejs-plain devicon skills-icon"></i>
                            <p>Node.js</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-git-plain devicon skills-icon"></i>
                            <p>Git</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-github-plain devicon skills-icon"></i>
                            <p>GitHub</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="devicon-bootstrap-plain devicon skills-icon"></i>
                            <p>Bootsrap</p>
                        </li>
                    </Fade>
                    <Fade left cascade>
                        <li className='skills-list list-inline-item'>
                            <i className="fab fa-figma devicon skills-icon"></i>
                            <p>Figma</p>
                        </li>
                    </Fade>
                </ul>

            </div>
        </Element>
    )
}



export default Skills
