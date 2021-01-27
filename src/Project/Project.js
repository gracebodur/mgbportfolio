import React from 'react'
import Zoom from 'react-reveal/Zoom'

function Project(props) {
    return (
        <Zoom>
        <section className='projects container'>
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="card">
                        <div className='card-body'>
                            <div className="card-image">
                                <img className="img-responsive col-md-12 project-img" src={props.imgUrl} alt='app screenshot' />
                            </div>
                            <h4 className="card-title">{props.title}</h4>
                            <div className="card-content container">
                                <p className='project-description card-text'>{props.description}</p>
                            </div>
                            <div className="card-action project-links d-flex justify-content-around">
                                <ul>
                                    <li className='link-list'>
                                        <a aria-label='link to email' target='_blank' rel='noreferrer' href={props.codeLink}>Code</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='link-list'>
                                        <a aria-label='link to email' target='_blank' rel='noreferrer' href={props.liveLink}>Live</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Zoom>
    )

}

export default Project