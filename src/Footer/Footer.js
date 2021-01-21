import React from 'react'
import './Footer.css'

function Footer () {
    return (
        <section className='footer'>
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
                <a href="https://docs.google.com/document/d/1gSfBTaGemXr8q5M3qIJ9E74bn7ojFcPs9axVP9qzbcM/edit?usp=sharing" target='_blank' rel='noreferrer'>
                    <li className='footer-link'>resume
                    </li>
                </a>
            </ul>
        </section>
    )
}

export default Footer