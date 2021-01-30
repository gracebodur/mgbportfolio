import React from 'react'
import { Element } from 'react-scroll'
import SkillsList from '../SkillsList/SkillsList'
import skillsItems from '../skillsItems'
import './Skills.css'

function Skills () {
    const skillsData = skillsItems.map( item => <SkillsList
        key={item.id} iconUrl={item.iconUrl} iconName={item.iconName} /> )
    return (
        <Element id='skills' name='skills'>
            <div className='skills-title text-center'>
                <h1>Skills and Tools</h1>
            </div>
            {skillsData}
        </Element>
    )
}

export default Skills
