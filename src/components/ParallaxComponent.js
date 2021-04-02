import React from 'react';

const inlinestyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  }
  

function App() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <Parallax bgImage="/assets/images/SiteBG1.jpg" bgImageAlt="first BG">
          <div style = {{height: 850}}>
            <div style={inlinestyle}> HTML inside the parallax</div>
          </div>
        </Parallax>
        <Parallax bgImage="/assets/images/SiteBG2.jpg" bgImageAlt="second BG" blur={{ min: -1, max: 3 }}>
          <div style = {{height: 850}}>
            <div style={inlinestyle}>Dynamic Blur</div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage="/assets/images/bgStars.jpg" bgImageAlt="third BG" strength={-200}>
          <div style = {{height: 850}}>
            <div style={inlinestyle}>Reverse Direction</div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax 
          bgImage="/assets/images/SiteBG1.jpg" 
          bgImageAlt="third BG" 
          strength={200}
          renderLayer={percentage => (
            <div 
            style={{ 
              width: '37%',
              height: `590px`,
              position: 'absolute',
              backgroundImage: "url("+ Sun + ")",
              backgroundColor: `rgba:(249, 223, 114, ${percentage * 9})`,
              left: '50%',
              top: '30%',
              transform: `translate(-50%, -50%)`,
             }}>
             {console.log(percentage)}
            </div>
          )}
        >
          <div style = {{height: 850}}>
            <div style={inlinestyle}>Render Prop</div>
          </div>
        </Parallax>
        <div style={{height: '100vh' }}></div>
      </div>
      
    )
  }