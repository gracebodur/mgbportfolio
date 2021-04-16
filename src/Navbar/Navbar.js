import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className='topbar' id='home'>
			<ul className='nav'>
				<li>
					<Link to='about' spy={true} smooth={true} duration={100}>
						about
					</Link>
				</li>
				<li>
					<Link to='skills' spy={true} smooth={true} duration={100}>
						skills
					</Link>
				</li>
				<li>
					<Link to='projects' spy={true} smooth={true} duration={100}>
						projects
					</Link>
				</li>
				<NavLink to='/resume'>
					<li>resume</li>
				</NavLink>
			</ul>
		</nav>
	)
}

export default Navbar
