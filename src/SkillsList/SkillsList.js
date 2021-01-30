import React from 'react'
import Reveal from 'react-reveal/Reveal';
import './SkillsList.css'

function SkillsList ( props ) {
    return (
        <Reveal top cascade >
            <div id="skills-item" className="skills-wrapper">
                <div className="skills-inner-wrapper">
                    <div className="skills-icons container">
                        <div>
                            <i className={props.iconUrl}></i>
                            <p>{props.iconName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    )

}

export default SkillsList