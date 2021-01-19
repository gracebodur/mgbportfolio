import React from 'react'
import './App.css'
import Topbar from './Topbar/Topbar'
import Intro from './Intro/Intro'
import Projects from './Projects/Projects'

function App () {
	return (
		<div>
			<Topbar />
			<Intro />
			<Projects />
		</div>
	)
}

export default App
