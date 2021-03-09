import React from 'react'
// import avatar from '../assets/avatar.webp'
import './About.css'

function About () {
    return (
        <div className='about-wrapper' id='about'>
            <section className="about-section">
                <img className="grace-avatar" src='https://placeholder.pics/svg/400x650' alt='Marie Grace Bodur profile pic' />
                <div className="container-s">
                    <h2 className="about-title text-left">Working remotely, based in North Carolina</h2>
                    <p className='about-text text-left'>Hello World!</p>
                    <p className='about-text text-left'>I'm Grace Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, modi.</p>
                    <p className="about-text text-left">I see myself as a full-stack web developer with a strength in the front-end and a passion for helping others, clean code and great UI/UX. I love being a developer because I can combine my creativity and analytical traits to break down complex problems and solve them efficiently. I believe that creating eloquently designed tools and applications can be an enormous driver in improving and growing an organization.I can work closely with other team members, but I work just as well independently. I work comfortably under pressure.</p>
                    <p className='about-text text-left'>I enjoy traveling and learning about new cultures, new languages and new ways of thinking. It has made me an empathetic and open-minded individual, who can grasp new concepts quickly and adapt easily to changes in the work environment.</p>
                    <p className='about-text text-left'>I'm excited to <a href="https://www.linkedin.com/in/mgracebodur/" className='lead link' target='_blank' rel='noreferrer' alt='connect with linkedin' style={{textDecoration: 'none', color: 'goldenrod'}}>connect</a> with companies and colleagues that inspire me!</p>
                </div>
            </section>
        </div>
    )
}

export default About