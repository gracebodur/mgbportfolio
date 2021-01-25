import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import ProjectHeader from './ProjectHeader/ProjectHeader'
import Projects from './Projects/Projects'
import ScrollToTop from './ScrollToTop/ScrollToTop'
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
				<ScrollToTop />
				<Footer />
			</div>

		)
	}

}

export default App
