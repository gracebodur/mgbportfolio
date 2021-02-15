import React from 'react'
import SkillsList from '../SkillsList/SkillsList'
import skillsItems from '../skillsItems'
import './Skills.css'

function Skills() {
	const skillsData = skillsItems.map((item) => (
		<SkillsList key={item.id} iconUrl={item.iconUrl} iconName={item.iconName} />
	))
	return (
		<section id='skills'>
			<div className='text-center'>
				<h1 className='skills-title'>Skills and Tools</h1>
			</div>
			<div className='container text-center d-flex justify-content-around skills-wrapper'>
                    {skillsData}
			</div>
		</section>
	)
}

export default Skills
