import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer' id='contact'>
            <ul className='footer-item'>
                <a href="http://linkedin.com/in/mgracebodur" target='_blank' rel='noreferrer'>
                    <li className='footer-link'>linkedin</li>
                </a>
                <a href="https://github.com/gracebodur" target='_blank' rel='noreferrer'>
                    <li className='footer-link'>github</li>
                </a>
                <a href="mailto:mgracebodur@gmail.com" target='_blank' rel='noreferrer'>
                    <li className='footer-link'>email</li>
                </a>
                <Link to='/resume'>
                    <li className='footer-link'>resume
                    </li>
                </Link>
            </ul>
        </footer>
    )
}

export default Footer