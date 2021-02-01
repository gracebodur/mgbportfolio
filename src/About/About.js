import React from 'react'
import avatar from '../assets/avatar.png'
import './About.css'

function About () {
    return (
       <section className="about-section" id='about'>
		<img className="flag" src={avatar} alt='test'/>
		<div className="container-s">
			<h2 className="about-title">Working remotely, based in North Carolina</h2>
			<h5 className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni maxime odit amet fugit esse. Blanditiis voluptatibus natus tenetur officiis. Autem tempora ducimus labore, velit est culpa natus similique amet consectetur error assumenda voluptas laudantium dolorum in nostrum minima alias nemo dicta, sed hic nisi. Dignissimos, nulla voluptatibus! Accusantium, impedit.</h5>
		</div>
		<div className="avatar">
			<img className="grace-avatar" src={avatar} alt='test'/>
		</div>
	</section>
    )
}

export default About