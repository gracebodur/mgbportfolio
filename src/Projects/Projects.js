import React from 'react'
import { Element } from 'react-scroll'
import ProjectList from '../ProjectList/ProjectList'
import projectItems from '../projectItems'
import './Projects.css'


function Projects () {
    const projectData = projectItems.map( item => <ProjectList key={item.id} imgUrl={item.imgUrl}
        title={item.title}
        description={item.description}
        liveLink={item.liveLink}
        codeLink={item.codeLink}
    /> )

    return (
        <section className='projects container' >
            <Element name='projects'>
                {projectData}
            </Element>
        </section>
    )
}

export default Projects


