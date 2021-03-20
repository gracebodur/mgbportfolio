import React from 'react'
import './Footer.css'

function Footer () {
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
                <a href="https://drive.google.com/file/d/1R6-zZ11e09jmKfGqEIXUOG5txmcOuDv-/view?usp=sharing" target='_blank' rel='noreferrer'>
                    <li className='footer-link'>resume
                    </li>
                </a>
            </ul>
        </footer>
    )
}

export default Footer