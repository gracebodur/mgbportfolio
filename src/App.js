import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";
import Intro from "./components/Intro/Intro";
import About from "./pages/About/About";
import Skills from "./components/Skills/Skills";
import ProjectHeader from "./components/ProjectHeader/ProjectHeader";
import Projects from "./pages/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component {
  state = { loading: true };
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
    });
  };
  componentDidMount() {
    this.wait(2000);
  }
  render() {
    if (this.state.loading) return <Preloader/>;
    return (
      <div>
        <Switch>
          <Route exact path="/">
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
        </Switch>
      </div>
    );
  }
}

export default App;
