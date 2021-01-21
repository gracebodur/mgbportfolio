import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import ProjectHeader from './ProjectHeader/ProjectHeader'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'

class App extends React.Component {
	render () {
		return (
			<div>
				<Navbar />
				<Intro />
				<About />
				<Skills />
				<ProjectHeader />
				<Projects />
				<Footer />
			</div>

		)
	}

}

export default App
