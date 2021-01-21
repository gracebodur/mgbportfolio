import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import projectItems from '../projectItems'
import './Projects.css'


function Projects () {
    const projectData = projectItems.map( item => <Project key={item.id} imgUrl={item.imgUrl}
        title={item.title}
        description={item.description}
        liveLink={item.liveLink}
        codeLink={item.codeLink}
    /> )

    return (
        <section className='projects container' >
            <Element id='projects' name='projects'>
                {projectData}
            </Element>
        </section>
    )
}

export default Projects

