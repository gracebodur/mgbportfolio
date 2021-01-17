import React from 'react'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import mail from '../assets/email.svg'
import docs from '../assets//google-docs.svg'
import './Topbar.css'

function Topbar () {
    return (
        <section className='topbar'>
            <ul className='social'>
                <a href="http://linkedin.com/in/mgracebodur" target='_blank' rel='noreferrer'>
                    <li className='social-list'><img className='social-icons' src={linkedin} alt="linkedin icon" /></li>
                </a>
                <a href="https://github.com/gracebodur" target='_blank' rel='noreferrer'>
                    <li className='social-list'><img className='social-icons' src={github} alt="github icon" /></li>
                </a>
                <a href="mailto:mgracebodur@gmail.com" target='_blank' rel='noreferrer'>
                    <li className='social-list'><img className='social-icons' src={mail} alt="mail icon" /></li>
                </a>
                <a href="https://docs.google.com/document/d/1gSfBTaGemXr8q5M3qIJ9E74bn7ojFcPs9axVP9qzbcM/edit?usp=sharing" target='_blank' rel='noreferrer'>
                    <li className='social-list'><img className='social-icons' src={docs} alt="document icon" />
                    </li>
                </a>
            </ul>
        </section>
    )
}

export default Topbar