import React from 'react'
import Navbar from './Navbar/Navbar'
import Logo from './Logo/Logo'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import ProjectHeader from './ProjectHeader/ProjectHeader'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import Footer from './Footer/Footer'

class App extends React.Component {
	render () {
		return (
			<div>
				<Navbar />
				<Logo />
				<Intro />
				<About />
				<Skills / >
				<ProjectHeader />
				<Projects />
				<Resume />
				<ScrollToTop />
				<Footer />
			</div>
		)
	}

}

export default App
