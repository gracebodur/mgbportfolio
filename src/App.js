import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo'
import Intro from './components/Intro/Intro'
import About from './pages/About/About'
import Skills from './components/Skills/Skills'
import ProjectHeader from './components/ProjectHeader/ProjectHeader'
import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'

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
