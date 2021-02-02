import React from 'react'
import avatar from '../assets/avatar.webp'
import './About.css'

function About () {
    return (
        <div className='about-wrapper' id='about'>
            <section className="about-section">
                <img className="grace-avatar" src={avatar} alt='Marie Grace Bodur profile pic' />
                <div className="container-s">
                    <h2 className="about-title">Working remotely, based in North Carolina</h2>
                    <h5 className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni maxime odit amet fugit esse. Blanditiis voluptatibus natus tenetur officiis. Autem tempora ducimus labore, velit est culpa natus similique amet consectetur error assumenda voluptas laudantium dolorum in nostrum minima alias nemo dicta, sed hic nisi. Dignissimos, nulla voluptatibus! Accusantium, impedit.</h5>
                </div>
            </section>
        </div>
    )
}

export default About