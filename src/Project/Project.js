import React from 'react'
import Zoom from 'react-reveal/Zoom'
import './Project.css'

function Project ( props ) {
    return (
        <Zoom>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="box">
                            <img src={props.imgUrl} alt='project screentshot' />
                            <div className="box-content">
                                <div className="inner-content">
                                    <h3 className="title">{props.title}</h3>
                                    <span className="post">{props.description}</span>
                                    <ul className="icon">
                                        <li><a href={props.codeLink}><i className="fa fa-search"></i></a></li>
                                        <li><a href={props.liveLink}><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )

}

export default Project