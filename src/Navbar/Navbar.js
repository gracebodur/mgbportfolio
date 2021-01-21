import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'


function Navbar () {
    return (
        <section className='topbar'>
            <ul className='nav'>
                <li>
                    <Link to="about"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        about
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        skills
                    </Link>
                </li>
                <li>
                    <Link to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        projects
                    </Link>
                </li>
                <a href="https://docs.google.com/document/d/1BC368Q1XUBKmTt6m_QfGkrA6QKX2XA0oinJLOfy0di0/edit?usp=sharing" target='_blank' rel='noreferrer'>
                    <li>resume</li>
                </a>
            </ul>
        </section>
    )
}


export default Navbar