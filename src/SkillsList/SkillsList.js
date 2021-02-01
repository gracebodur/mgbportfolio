import React from 'react'
import './SkillsList.css'

function SkillsList ( props ) {
    return (
        <div className="skills-icons">
            <i className={props.iconUrl}></i>
            <p className='lead'>{props.iconName}</p>
        </div>
    )

}

export default SkillsList