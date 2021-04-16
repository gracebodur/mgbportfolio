import React from 'react'
import { Switch, Route } from 'react-router-dom'
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
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/'>
						<Navbar />
						<Logo />
						<Intro />
						<About />
						<Skills />
						<ProjectHeader />
						<Projects />
						<ScrollToTop />
						<Footer />
					</Route>
					<Route path='/resume'>
						<Resume />
					</Route>
				</Switch>
			</div>
		)
	}
}

export default App
