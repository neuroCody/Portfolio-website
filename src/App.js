import React, {useState, useEffect} from 'react';
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

      <div className="parallax_layer parallax Mtn1" style={{ transform: `translateY(${offsetY * 0.0}px)` }}></div>

      <div className="parallax_layer parallax Fog1" style={{ transform: `translateY(${offsetY * 0.5}px)`}}></div>

      {/* <div className="parallax_layer parallax Circle2" style={{ transform: `translateY(-${offsetY * 0.4}px)`}}> </div> */}

      {/* <div className="parallax_layer parallax Circle1" style={{ transform: `translateY(-${offsetY * 0.6}px)`}}></div> */}

      {/* <div className="parallax_layer parallax Mtn2" style={{ transform: `translateY(${offsetY * 0.2}px)`}}></div> */}

    </div>
    <div className="main_container container">
      <div className="row">
          <div className="col">
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
        </div>
    </div>
    </>
  )
}

export default App;
