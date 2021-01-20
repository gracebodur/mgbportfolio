import React from 'react'
import './App.css'
import Topbar from './Topbar/Topbar'
import Intro from './Intro/Intro'
import ProjectTitle from './ProjectTitle/ProjectTitle'
import Projects from './Projects/Projects'

function App () {
	return (
		<div>
			<Topbar />
			<Intro />
			<ProjectTitle />
			<Projects />
		</div>
	)
}

export default App
