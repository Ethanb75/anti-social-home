import React, { Component } from 'react';
import logo from './assets/ASIcon.png';
import './css/App.css';

// Components!
import Home from './Home';
import About from './About';
import Projects from './Projects';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  state = {
    navsOpen: false
  }
  linkClicked(ev, otherTarget) {
    document
      .getElementsByClassName('activeLink')[0]
      .classList
      .remove('activeLink');
    if(otherTarget) {
      otherTarget
        .classList
        .add('activeLink');
    } else {
      ev
        .target
        .classList
        .add('activeLink');
    }
    return this.setState({ navsOpen: false });
  }

  componentDidMount() {
    //find current page set location
    let currPage = window
      .location
      .pathname
      .replace(/\//i, '');
    if (!currPage) {
      document
        .getElementById('homeBtn')
        .classList
        .add('activeLink');
    } else {
      document
      .querySelector(`[id^="${currPage}"]`)
      .classList
      .add('activeLink');
    }
    window.scrollTo({top: 0});
  }
  
  render() {
    let curNavState = this.state.navsOpen;

    return (
      <Router>
        <div>
          <nav style={ curNavState ? {boxShadow: 'none'} : {}}>
            <div className="brand">
              <Link onClick={ev => this.linkClicked(ev, document.getElementById('homeBtn'))} to="/">
                <img src={logo} alt="Anti Social Marketing logo" />
              </Link>
            </div>
            <div onClick={ev => {
                this.setState({ navsOpen: !curNavState });
              }} className="navBtn">
              <span className={
                curNavState ?
                  'navBtn--active' : ''
              }></span>
              
              
            </div>
          </nav>
          
        
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>

          <div className="links" style={ curNavState ? { zIndex: 100 } : {} }>
            <div className="linksWrap">
              <span className={ curNavState ? 'link link--active' : 'link'}>
                <Link onClick={ev => this.linkClicked(ev)} to="/" id="homeBtn">Home</Link>
              </span>
              <span className={ curNavState ? 'link link--active' : 'link'}>
                <Link onClick={ev => this.linkClicked(ev)} to="/about" id="aboutBtn">About</Link>
              </span>
              <span className={ curNavState ? 'link link--active' : 'link'}>
                <Link onClick={ev => this.linkClicked(ev)} to="/projects" id="projectsBtn">Projects</Link>
              </span>
              <span className={ curNavState ? 'link link--active' : 'link'}>
                <a href="" onClick={ev => {
                    ev.preventDefault();
                    this.setState({ navsOpen: false });
                    document
                      .getElementsByTagName('footer')[0]
                      .scrollIntoView({behavior: 'smooth'});
                  }}>Contact</a>
              </span>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
