import React from 'react'
import './Intro.css'

function Intro () {
    return (
        <section className='intro'>
            <h1 className='intro-title'>Frontend Developer</h1>
            <h4 className='intro-text'>Hi there, I'm Grace. I develop fully responsive web applications, and write clean, high-quality code that is scalable and maintainable.</h4>
            <div className='intro-actions'>
                <a href='#projects' className='intro-link' alt='project link'>
                    <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" stroke="#D9B002" fill="none" fillRule="evenodd"><path strokeWidth="1.82" strokeLinecap="round" strokeLinejoin="round" d="M9.1 12.012l4.095 4.55 4.095-4.55"></path><circle strokeWidth="1.638" cx="13.195" cy="13.195" r="13.195"></circle></g></svg>
                    <span className="link">See projects</span>
               </a>
            </div>
        </section>

    )
}

export default Intro