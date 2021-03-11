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
                        duration={100}>
                        about
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                        spy={true}
                        smooth={true}
                        duration={100}>
                        skills
                    </Link>
                </li>
                <li>
                    <Link to="projects"
                        spy={true}
                        smooth={true}
                        duration={100}>
                        projects
                    </Link>
                </li>
                <a href="https://drive.google.com/file/d/1dXknloXwXyLT3dzBkGkrBmdLi2YJoWjh/view?usp=sharing" target='_blank' rel='noreferrer'>
                    <li>resume</li>
                </a>
            </ul>
        </section>
    )
}


export default Navbar