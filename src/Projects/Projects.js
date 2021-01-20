import React from 'react'
import gottalotto from '../assets/gottalotto-frame.png'
import './Projects.css'

function Projects () {

    return (
        <section className='projects container'>
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="card">
                        <div className='card-body'>
                            <div className="card-image">
                                <img className="img-responsive col-md-12 project-img" src={gottalotto} alt='test' />
                            </div>
                            <h4 className="card-title">GottaLotto</h4>
                            <div className="card-content container">
                                <p className='project-description card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, perferendis velit officiis voluptatibus optio ullam aut corrupti doloribus fugit ea debitis consectetur ducimus dolores maxime id earum dolor. Repudiandae accusantium ipsam nam rem labore facilis dolores illum repellat doloribus nesciunt voluptatem temporibus adipisci, dolor animi libero aliquid ab placeat velit et, odio quod omnis error. Veritatis nisi velit facilis cum laborum impedit eaque numquam, debitis assumenda nihil rerum. Minima deserunt nobis quaerat ratione fugit. Temporibus, velit dignissimos quo inventore nobis alias dolor doloremque. Sint neque officiis vitae suscipit incidunt labore! Sunt, ab neque. Dolorem soluta ullam odit deleniti blanditiis quo.</p>
                            </div>
                            <div className="card-action project-links d-flex justify-content-around">
                                <ul>
                                    <li className='link-list'>
                                        <a aria-label='link to email' target='_blank' href="www.github.com">Link</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='link-list'>
                                        <a aria-label='link to email' target='_blank' href="www.github.com">Link</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='link-list'>
                                        <a aria-label='link to email' target='_blank' href="www.github.com">Link</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects

