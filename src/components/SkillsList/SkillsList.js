import './SkillsList.css'

const SkillsList = ({iconUrl, iconName}) => {
    return (
        <div className="skills-icons">
            <i className={iconUrl}></i>
            <p className='lead'>{iconName}</p>
        </div>
    )

}

export default SkillsList