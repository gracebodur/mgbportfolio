import React from 'react'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import mail from './assets/email.svg'
import docs from './assets//google-docs.svg'
import './Topbar.css'

function Topbar() {
    return (
        <section className='topbar'>
        <ul className='social'>
				<a href="http://linkedin.com/in/mgracebodur">
					<li className='social-list'><img className='social-icons' src={linkedin} alt="linkedin icon" target='_blank'/></li>
				</a>
				<a href="https://github.com/gracebodur">
					<li className='social-list'><img className='social-icons' src={github} alt="github icon" target='_blank' /></li>
				</a>
				<a href="mgracebodur@gmail.com">
					<li className='social-list'><img className='social-icons' src={mail} alt="mail icon" target='_blank' /></li>
				</a>
                <a href="https://docs.google.com/document/d/1gSfBTaGemXr8q5M3qIJ9E74bn7ojFcPs9axVP9qzbcM/edit?usp=sharing">
                    <li className='social-list'><img className='social-icons' src={docs} alt="document icon" target='_blank' />
					</li>
				</a>
        </ul>
        </section>
    )
}

export default Topbar