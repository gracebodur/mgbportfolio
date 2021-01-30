import React from 'react'
import { Element } from 'react-scroll'
import Reveal from 'react-reveal/Reveal';
import './Skills.css'

function Skills () {
    return (
        <Element id='skills' name='skills'>
            <Reveal top cascade>
                <div className='skills-title text-center'>
                    <h1>Skills and Tools</h1>
                </div>
                <div id="skills-item" className="skills-wrapper">
                    <div className="skills-inner-wrapper">
                        <div className="skills-icons container">
                            <div>
                                <i className="devicon-html5-plain"></i>
                                <p>HTML5</p>
                            </div>

                            <div>
                                <i className="devicon-javascript-plain"></i>
                                <p>Javascript</p>
                            </div>

                            <div>
                                <i className="devicon-css3-plain"></i>
                                <p>CSS3</p>
                            </div>

                            <div>
                                <i className="devicon-react-original"></i>
                                <p>React</p>
                            </div>

                            <div>
                                <i className="devicon-express-original"></i>
                                <p>Express</p>
                            </div>

                            <div>
                                <i className="devicon-postgresql-plain"></i>
                                <p>PostgreSQL</p>
                            </div>

                            <div>
                                <i className="devicon-nodejs-plain"></i>
                                <p>Node.js</p>
                            </div>

                            <div>
                                <i className="devicon-git-plain"></i>
                                <p>Git</p>
                            </div>

                            <div>
                                <i className="devicon-github-plain"></i>
                                <p>GitHub</p>
                            </div>

                            <div>
                                <i className="devicon-bootstrap-plain"></i>
                                <p>Bootsrap</p>
                            </div>

                            <div>
                                <i className="fab fa-figma figma"></i>
                                <p>Figma</p>
                            </div>

                        </div>
                    </div>
                </div>
            </Reveal>
        </Element>
    )
}



export default Skills
