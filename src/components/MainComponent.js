import React, { Component } from 'react';
import About from './AboutMeComponent';
import Skills from './SkillsComponent';
import Portfolio from './PortfolioComponent';
import Parallax from './ParallaxComponent';
import Footer from './FooterComponent';
import { Button, Row } from 'reactstrap';
import { Link } from 'react-scroll';




class Main extends Component{

  render(){
    return (
      <div>
        <Parallax />
        <div className="main_container">
            <About />
            
            <Skills />
        </div>
        <Portfolio />
        <Footer />
      </div>
    )
  }
}

export default Main;