import React, { useEffect } from 'react';
import { Row, Col, Card, CardBody, CardHeader, Button, UncontrolledCollapse } from 'reactstrap';
import Aos from 'aos';
import "aos/dist/aos.css";

const Portfolio = () => {

    useEffect(() => {
        Aos.init({});
    }, []);

    return(
        <div
            style={{
                backgroundColor: '#eeebdd', 
                paddingTop: 30,
                paddingBottom: 30,
                width: '100%'
            }}
        >
            <div
                id='projects'
                style={{
                    textAlign: 'center',
                    margin: 40,
                }}
            >
                    <h1 style={{ 
                    color: 'black',
                    fontSize: 75, 
                    padding: 30
                    }}>
                    <strong>
                    Portfolio Projects
                    </strong>
                    </h1>
                    
            </div>
            <div className='d-none d-lg-block'>
                <div className='ProjectCard'>
                    <div
                        className="d-none d-md-block"
                        style={{
                            paddingRight : "17%",

                        }}
                    >
                    
                        <img 
                        className='img-fluid'
                        src='/assets/images/Projhex-Home.png'
                        style={{
                            position: 'relative',
                            height: 700,
                            width: 'auto',
                            
                            borderRadius: 5,
                            boxShadow: '5px 3px 10px black'
                            
                        }}
                        
                        />
                    </div>
                    <Row 
                    style={{
                        marginBottom: '13%'
                    }}
                    ></Row>
                    <Card
                        data-aos="fade-left" data-aos-delay= "500" 
                        style={{ 
                            backgroundColor: 'rgba(0, 0, 0, .9)',
                            position: 'absolute',
                            marginLeft: '53%',
                            marginTop: '11%',
                            height: 300,
                            width: 500,
                            zIndex: 100,
                            
                            boxShadow:'5px 5px 20px black'
                        }}
                    >
                        <CardHeader
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            Projhex - Project Tracker
                        </CardHeader>
                        <CardBody
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            
                            <h3>Description:</h3>
                            <p>Landing page site advertising a project tracking service. Features a single page React application that is fully responsive for all viewport sizes, with authentication required for input fields.</p>
                            <h5>Links:</h5>
                                <a className="btn btn-lg" href="#" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-desktop" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                                <a className="btn btn-lg" href="https://github.com/neuroCody/React-Nucampsite.git" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                        </CardBody>
                    </Card>
                    
                </div>
                <div className='ProjectCard'>
                    
                    <div
                        className="d-none d-md-block"
                        style={{
                            paddingLeft : "18%",
                        }}
                    >
                    
                        <img 
                        className='img-fluid'
                        src='/assets/images/Nucamp-Home.png'
                        style={{
                            position: 'relative',
                            height: 700,
                            width: 'auto',
                            borderRadius: 5,
                            boxShadow: '5px 3px 10px black'
                            
                        }}
                        
                        />
                    </div>
                    <Row 
                    style={{
                        marginBottom: '13%'
                    }}
                    ></Row>
                    <Card data-aos="fade-right" data-aos-delay= "400" 
                        style={{ 
                            backgroundColor: 'rgba(0, 0, 0, .9)',
                            position: 'absolute',
                            marginRight: '53%',
                            marginTop: '11%',
                            height: 310,
                            width: 500,
                            zIndex: 100,
                            
                            boxShadow:'5px 5px 20px black'
                        }}
                    >
                        <CardHeader
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            Nucamp
                        </CardHeader>
                        <CardBody
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            
                            <h3>Description:</h3>
                            <p>Website for reviewing fictional campsites. Built as a single page React/Redux application. Utylizes a JSON server to allow comments to be updated and stored to memory.</p>
                            <div>
                                <h5>Links:</h5>
                                <a className="btn btn-lg" href="https://nucampreviews.netlify.app/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-desktop" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                                <a className="btn btn-lg" href="https://github.com/neuroCody/React-Nucampsite.git" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className='ProjectCard'>
                    
                    <div
                        className="d-none d-md-block"
                        style={{
                            paddingRight : "10%",
                        }}
                    >
                    
                        <img 
                        className='img-fluid'
                        src='/assets/images/Imperial-Home.png'
                        style={{
                            position: 'relative',
                            height: 800,
                            width: 'auto',
                            borderRadius: 5,
                            boxShadow: '5px 3px 10px black'
                            
                        }}
                        
                        />
                    </div>
                    
                    <Card data-aos="fade-left" data-aos-delay= "400" 
                        style={{ 
                            backgroundColor: 'rgba(0, 0, 0, .9)',
                            position: 'absolute',
                            marginLeft: '53%',
                            marginTop: '11%',
                            height: 300,
                            width: 500,
                            zIndex: 100,
                            boxShadow:'5px 5px 20px black'
                        }}
                    >
                        <CardHeader
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            Imperial Donuts
                        </CardHeader>
                        <CardBody
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            
                            <h3>Description:</h3>
                            <p>Small business website for a donut shop. Created using fundamental HTML/CSS principles and a heavy focus on flex-box design. </p>
                            <div>
                                <h5>Links:</h5>
                                <a className="btn btn-lg" href="https://lordofdonuts.netlify.app/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-desktop" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                                <a className="btn btn-lg" href="https://github.com/neuroCody/Imperial-Donuts.git" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Col>
            <div className='d-block d-lg-none'>
                <Button color="primary" id='Projhex' style={{ marginBottom: '1rem' }}>Projhex</Button>
                <UncontrolledCollapse toggler='Projhex'>
                    <Card
                    style={{ 
                        backgroundColor: '#797C9A',
                    }}
                    >
                    <CardHeader
                        style={{
                            color: '#f4f4f2'
                        }}
                    >
                        <h1> Projhex - Project Tracker</h1>
                    </CardHeader>
                    <CardBody
                        style={{
                            color: '#f4f4f2'
                        }}
                    >
                    Landing page site advertising a project tracking service. Features a single page React application 
                    that is fully responsive for all viewport sizes, with authentication required for input fields.
                    </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            </Col>
            </Row>
            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Col>
            <div className='d-block d-lg-none'>
                    <Button color="primary" id='Nucamp' style={{marginLeft: '50%'}}>Nucamp</Button>
                <UncontrolledCollapse toggler='Nucamp'>
                    <Card
                    style={{ 
                        backgroundColor: '#797C9A',
                    }}
                    >
                    <CardHeader
                        style={{
                            color: '#f4f4f2'
                        }}
                    >
                        <h1> Projhex - Project Tracker</h1>
                    </CardHeader>
                    <CardBody
                        style={{
                            color: '#f4f4f2'
                        }}
                    >
                    Landing page site advertising a project tracking service. Features a single page React application 
                    that is fully responsive for all viewport sizes, with authentication required for input fields.
                    </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            </Col>
            </Row>
        </div>
    )
}

export default Portfolio;