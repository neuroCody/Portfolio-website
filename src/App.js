import React, {useState, useEffect} from 'react';
import About from './components/AboutMeComponent';
import { Button } from 'reactstrap';
import './App.scss';



function App() {


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

        <div className="parallax_layer parallax Fog1" style={{ transform: `translateY(-${offsetY * 0.6}px)`}}></div>

        <div className="parallax_layer parallax Mtn2" style={{ transform: `translateY(${offsetY * 0.5}px)`}}> </div>

        <div className="parallax_layer parallax Fog2" style={{ transform: `translateY(-${offsetY * 0.6}px)`}}></div>

        <div className="parallax_layer parallax Mtn3" style={{ transform: `translateY(${offsetY * 0.3}px)`}}> </div>

        <div className="parallax_layer parallax Fog3" style={{ transform: `translateY(-${offsetY * 0.6}px)`}}></div>

        <div className="parallax_layer parallax Mtn4" style={{ transform: `translateY(-${offsetY * 0.1}px)`}}></div>

        <div className="parallax_layer parallax Title d-flex align-content-center" style={{ transform: `translateY(${offsetY * 0.7}px)`}}>
          <h1>Cody Sullivan</h1>
          <h2>Full Stack Web Developer</h2>
          <Button color='primary' className="btn-lg hireBtn">Hire Me!</Button>
        </div>

        <div className="parallax_layer parallax Fog4" style={{ transform: `translateY(-${offsetY * 1}px)`}}></div>

        <div className="parallax_layer parallax treeline" style={{ transform: `translateY(-${offsetY * 0.4}px)`}}></div>

        {/* <div className="parallax_layer parallax Mtn2" style={{ transform: `translateY(${offsetY * 0.2}px)`}}></div> */}

      </div>
      <div className="main_container fluid">
        <div className="row">
            <div className="col-12">
                <h1>This is some words</h1>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="col">
                <h2>more words</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="col">
                <h2>more words</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="col">
                <h2>more words</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="col">
                <h2>more words</h2>
            </div>
          </div>
          <About />
      </div>
    
    </>
  )
}

export default App;
