import React from 'react'
import './Footer.css'

function Footer () {
    return (
        <section className='footer'id='contact'>
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
                <a href="https://drive.google.com/file/d/1dXknloXwXyLT3dzBkGkrBmdLi2YJoWjh/view?usp=sharing" target='_blank' rel='noreferrer'>
                    <li className='footer-link'>resume
                    </li>
                </a>
            </ul>
        </section>
    )
}

export default Footer