import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Footer(props) {
    return(
        
        <footer 
            id='hireMe'
            style={{
            backgroundImage: 'linear-gradient(rgba(21,14,48,0.9300000071525574), rgba(21,14,48,0.8859677314758301))',
            padding: '20px 0px',
            width: '100%',
            
        }}>
        <div className="container">
            <div className="row"
                style={{
                    height:100
                }}
            >
                <div className="col col-sm-2 text-center">
                    <a className="btn btn-lg" href="https://github.com/neuroCody" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
                        color: 'white'
                    }}></i></a>

                    <a className="btn btn-lg" href="https://www.linkedin.com/in/cody-sullivan-b89a9551/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-linkedin" style={{
                        color: 'white'
                    }}></i></a>
                </div>
                <div 
                    className="col col-sm-8 text-center"
                    style={{
                        color: '#f4f4f2',
                        alignText: 'center',
                        
                    }}
                >
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        
                        <i className="fa fa-chevron-left text-center" style={{color: 'white', display: 'flex', alignItems: 'center', margin: 15}} />
                        <h1>Get in touch!</h1>
                        <i className="fa fa-chevron-right" style={{color: 'white', display: 'flex', alignItems: 'center', margin: 15}} />
                    </div>
                    
                </div>
                <div className="col col-sm-2 text-center">
                    <a className="btn btn-link btn-lg text-white" href="mailto: sullivan.cody7@gmail.com"><i className="fa fa-envelope"></i>Email Me</a>
                </div>
            </div>
        </div>
    </footer>
    )
} 

export default Footer;