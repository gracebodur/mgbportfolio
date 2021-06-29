import { Element } from 'react-scroll'
import ProjectList from '../../components/ProjectList/ProjectList'
import projectItems from '../../data/projectItems'
import './Projects.css'


const Projects = () => {
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


