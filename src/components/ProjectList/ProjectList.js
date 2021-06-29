import Zoom from 'react-reveal/Zoom'
import './ProjectList.css'

const ProjectList = ({ liveLink, codeLink, imgUrl, title, description }) => {
	return (
		<Zoom>
			<div className='container'>
				<div className='row mb-5 box-container'>
					<div className='col-md-12'>
						<div className='box'>
							<a href={liveLink} target='_blank' rel='noreferrer'>
								<img src={imgUrl} alt='project screentshot' />
							</a>
							<div className='box-content'>
								<div className='inner-content'>
									<h3 className='title'>{title}</h3>
									<span className='post'>{description}</span>
									<ul className='icon'>
										<li>
											<a href={codeLink} target='_blank' rel='noreferrer'>
												Code
											</a>
										</li>

										<li>
											<a href={liveLink} target='_blank' rel='noreferrer'>
												Site
											</a>
										</li>
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

export default ProjectList
