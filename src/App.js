import React from 'react'
import './App.css'

function App() {
	return (
		<div className='main container-fluid'>
			<div className='header-container'>
				<div className='header'>
					<h1 className='text-bottom'>Marie Grace Bodur</h1>
				</div>

        <div className='box animate fadeInUp one'>Going up</div>
        
        <div className='box fade-in one'>look at me fade in</div>

				<div className='box fade-in two'>Oh hi! i can fade too!</div>

				<div className='box fade-in three'>Oh hi! i can fade three!</div>


				<div className='box animate fadeInLeft two'>Going left</div>
				<div className='box animate fadeInRight three'>Going up</div>
				<div className='box animate fadeInDown four'>Going up</div>
			</div>
		</div>
	)
}

export default App
