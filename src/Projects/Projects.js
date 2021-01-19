import React from 'react'
import gottalotto from '../assets/gottalotto-desktop.png'
import './Projects.css'

function Projects () {

    return (
        <section className='projects container'>
            <div className="row project-img">
                <img src={gottalotto} className='img-fluid col-sm-6' alt="gottalotto" />
            </div>

            <div className='project-info row'>
                <h2 className='project-title col-sm-6'>GottaLotto</h2>
                <h5 className='project-desc col-sm-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, numquam?</h5>
            </div>
        </section>
    )
}

export default Projects