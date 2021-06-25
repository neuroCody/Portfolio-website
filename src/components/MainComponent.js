import React, { Component } from 'react';
import { Container } from 'reactstrap';
import About from './AboutMeComponent';
import Skills from './SkillsComponent';
import Portfolio from './PortfolioComponent';
import Parallax from './ParallaxComponent';
import Footer from './FooterComponent';




class Main extends Component{

  render(){
    return (
      <Container fluid
        style={{paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0, overflow: 'hidden'}}
      >
        <Parallax />
        <div className="main_container">
            <About />
            
            <Skills />
        </div>
        <div className="secondary_container">
        <Portfolio />
        </div>
        <Footer />
      </Container>
    )
  }
}

export default Main;