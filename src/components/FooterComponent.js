import React from 'react';


function Footer(props) {
    return(
        
        <footer style={{
            backgroundImage: 'linear-gradient(rgba(21,14,48,0.9300000071525574), rgba(21,14,48,0.8859677314758301))',
            padding: '20px 0px',
            width: '100vw',
        }}>
        <div className="container">
            <div className="row">
                <div className="col col-sm-5 text-center">
                    <a className="btn btn-lg" href="https://github.com/neuroCody" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
                        color: 'white'
                    }}></i></a>

                    <a className="btn btn-lg" href="https://www.linkedin.com/in/cody-sullivan-b89a9551/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-linkedin" style={{
                        color: 'white'
                    }}></i></a>
                </div>
                <div className="col col-sm-5 text-center">
                    <a className="btn btn-link btn-lg text-white float-right" href="mailto: sullivan.cody7@gmail.com"><i className="fa fa-envelope"></i>Email Me</a>
                </div>
            </div>
        </div>
    </footer>
    )
} 

export default Footer;