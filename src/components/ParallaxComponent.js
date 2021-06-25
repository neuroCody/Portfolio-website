import React, { useState, useEffect } from 'react';
import { Button, Row } from 'reactstrap';
import { Link } from 'react-scroll';

export default function Parallax() {


  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      <div className="parallax" id="top">
        <div className="parallax_layer parallax Stars" ></div>

        <div className="parallax_layer parallax Mtn1" style={{ transform: `translateY(${offsetY * 0.5}px)` }}></div>

        <div className="parallax_layer parallax Fog1" style={{ transform: `translateY(-${offsetY * 0.3}px)`}}></div>

        <div className="parallax_layer parallax Mtn2" style={{ transform: `translateY(${offsetY * 0.4}px)`}}> </div>

        <div className="parallax_layer parallax Fog2" style={{ transform: `translateY(-${offsetY * 0.25}px)`}}></div>

        <div className="parallax_layer parallax Mtn3" style={{ transform: `translateY(${offsetY * 0.35}px)`}}> </div>

        <div className="parallax_layer parallax Fog3" style={{ transform: `translateY(-${offsetY * 0.2}px)`}}></div>

        <div className="parallax_layer parallax Mtn4" style={{ transform: `translateY(${offsetY * 0.1}px)`}}></div>

        <div className="parallax_layer parallax Title d-flex" style={{ transform: `translateY(${offsetY * 0.7}px)`}}>
        
          <h1>Cody Sullivan</h1><br/>
          <h5 className='profession'>Front End Web Developer</h5>
          <Row style={{
            style: 'flex',
            justifyContent: 'center',
          }}>
          <div>
          <Button outline className="btn-sm hireBtn">
          <Link
              activeClass= "active"
              to= 'hireMe'
              spy={true}
              smooth={true}
              duration={1200}
            >
              Hire Me!
            </Link>
          </Button>
          </div>
          <div>
          <Button outline className="btn-sm aboutBtn">
            <Link
              activeClass= "active"
              to= "about"
              spy={true}
              smooth={true}
              duration={1200}
            >
              About
            </Link>
          </Button>
          </div>
          <div>
          <Button outline className="btn-sm projectsBtn">
            <Link
              activeClass= "active"
              to= 'projects'
              spy={true}
              smooth={true}
              duration={1400}
            >
              Projects
            </Link>
            </Button>
          </div>
          </Row>
        </div>

        <div className="parallax_layer parallax Fog4" style={{ transform: `translateY(-${offsetY * 1}px)`}}></div>

        <div className="parallax_layer parallax treeline" style={{ transform: `translateY(-${offsetY * 0.2}px)`}}></div>

      </div>
    </div>
  )
}