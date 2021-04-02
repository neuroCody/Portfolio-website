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

      <div className="parallax_layer parallax Sun" style={{ transform: `translateY(-${offsetY * 0.0}px)` }}></div>

      <div className="parallax_layer parallax firstRange" style={{ transform: `translateY(${offsetY * 0.1}px)`}}></div>

      <div className="parallax_layer parallax secondRange" style={{ transform: `translateY(${offsetY * 0.15}px)`}}> </div>

      <div className="parallax_layer parallax finalRange" style={{ transform: `translateY(${offsetY * 0.2}px)`}}></div>

    </div>
    <div className="main_container">
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
