import React, {useState, useEffect} from 'react';
import About from './AboutMeComponent';
import Skills from './SkillsComponent';
import { Button, Row } from 'reactstrap';
import { Link } from 'react-scroll';




function Main() {


  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="parallax">
        <div className="parallax_layer parallax Stars" ></div>

        <div className="parallax_layer parallax Mtn1" style={{ transform: `translateY(${offsetY * 0.6}px)` }}></div>

        <div className="parallax_layer parallax Fog1" style={{ transform: `translateY(-${offsetY * 0.3}px)`}}></div>

        <div className="parallax_layer parallax Mtn2" style={{ transform: `translateY(${offsetY * 0.53}px)`}}> </div>

        <div className="parallax_layer parallax Fog2" style={{ transform: `translateY(-${offsetY * 0.28}px)`}}></div>

        <div className="parallax_layer parallax Mtn3" style={{ transform: `translateY(${offsetY * 0.35}px)`}}> </div>

        <div className="parallax_layer parallax Fog3" style={{ transform: `translateY(-${offsetY * 0.2}px)`}}></div>

        <div className="parallax_layer parallax Mtn4" style={{ transform: `translateY(-${offsetY * 0.3}px)`}}></div>

        <div className="parallax_layer parallax Title d-flex" style={{ transform: `translateY(${offsetY * 0.7}px)`}}>
          <h1>Cody Sullivan</h1>
          <h2>Full Stack Web Developer</h2>
          <Row style={{
            style: 'flex',
            justifyContent: 'center',
          }}>
          <div>
          <Button outline className="btn-sm hireBtn">Hire Me!</Button>
          </div>
          <div>
          <Button outline className="btn-sm aboutBtn">
            <Link
              activeClass= "active"
              to= "about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </Button>
          </div>
          <div>
          <Button outline className="btn-sm projectsBtn">Projects</Button>
          </div>
          </Row>
        </div>

        <div className="parallax_layer parallax Fog4" style={{ transform: `translateY(-${offsetY * 1}px)`}}></div>

        <div className="parallax_layer parallax treeline" style={{ transform: `translateY(-${offsetY * 0.3}px)`}}></div>

        {/* <div className="parallax_layer parallax Mtn2" style={{ transform: `translateY(${offsetY * 0.2}px)`}}></div> */}

      </div>
      <div className="main_container fluid">
          <About />
          <Skills />
      </div>
    
    </>
  )
}

export default Main;