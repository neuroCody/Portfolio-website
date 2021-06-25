import React, { useEffect } from 'react';
import { Row, Col, Card, CardBody, CardHeader, Button, UncontrolledCollapse } from 'reactstrap';
import { Link } from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css";

const Portfolio = () => {

    useEffect(() => {
        Aos.init({});
    }, []);

    return(
        <div 
                id= "projects"
                style={{
                backgroundColor: '#eeebdd', 
                paddingTop: 30,
                paddingBottom: 30,
                width: '100%'
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                }}
            >
                    <h1 style={{ 
                    color: 'black',
                    fontSize: '4rem', 
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
                        alt='Projhex Site'
                        />
                    </div>
                    <Row 
                    style={{
                        marginBottom: '10%'
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
                                color: '#f4f4f2',
                                fontSize: '25px'
                            }}
                        >
                            Projhex - Project Tracker
                        </CardHeader>
                        <CardBody
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            
                            <h5>Description:</h5>
                            <p>Landing page site advertising a project tracking service. Features a single page React application that is fully responsive for all viewport sizes, with authentication required for input fields.</p>
                            <h5>Links:</h5>
                                <a className="btn btn-lg" href="https://projhex.netlify.app/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-desktop" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                                <a className="btn btn-lg" href="https://github.com/neuroCody/Projhex-React-Site" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
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
                        src='/assets/images/taskTracker.png'
                        style={{
                            position: 'relative',
                            height: 700,
                            width: 'auto',
                            borderRadius: 5,
                            boxShadow: '5px 3px 10px black'
                            
                        }}
                        alt='Nucamp Site'
                        />
                    </div>
                    <Row 
                    style={{
                        marginBottom: '10%'
                    }}
                    ></Row>
                    <Card data-aos="fade-right" data-aos-delay= "400" 
                        style={{ 
                            backgroundColor: 'rgba(0, 0, 0, .9)',
                            position: 'absolute',
                            marginRight: '53%',
                            marginTop: '11%',
                            height: 280,
                            width: 500,
                            zIndex: 100,
                            
                            boxShadow:'5px 5px 20px black'
                        }}
                    >
                        <CardHeader
                            style={{
                                color: '#f4f4f2',
                                fontSize: '25px'
                            }}
                        >
                            Todone
                        </CardHeader>
                        <CardBody
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            
                            <h5>Description:</h5>
                            <p>Task tracker application built in React. Includes functionality to create, delete and set status for Task reminders.</p>
                            <div>
                                <h5>Links:</h5>
                                <a className="btn btn-lg" href="https://urtodone.netlify.app/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-desktop" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                                <a className="btn btn-lg" href="https://github.com/neuroCody/react-task-tracker.git" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
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
                        alt='Imperial Donuts Site'
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
                                color: '#f4f4f2',
                                fontSize: '25px'
                            }}
                        >
                            Imperial Donuts
                        </CardHeader>
                        <CardBody
                            style={{
                                color: '#f4f4f2'
                            }}
                        >
                            
                            <h5>Description:</h5>
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
                    <Row 
                    style={{
                        marginBottom: '5%'
                    }}
                    ></Row>
                </div>
            </div>
            <Row >
            <Col>
            <div className='d-block d-lg-none'
            >
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button color="primary" id='Projhex' style={{ marginBottom: '1rem' }}>Projhex</Button>
                </div>
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
                    <h5>Links:</h5>
                                <a className="btn btn-lg" href="https://projhex.netlify.app/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-desktop" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                                <a className="btn btn-lg" href="https://github.com/neuroCody/Projhex-React-Site" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                    </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            </Col>
            </Row>
            <Row >
            <Col>
            <div className='d-block d-lg-none' >
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button color="primary" id='Nucamp' style={{marginBottom: '1rem', marginTop: '1rem'}}>ToDone</Button>
                </div>
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
                        <h1> ToDone - Task Tracker</h1>
                    </CardHeader>
                    <CardBody
                        style={{
                            color: '#f4f4f2'
                        }}
                    >
                    Task tracker application built in React. Includes functionality to create, delete and set status for Task reminders.
                    <h5>Links:</h5>
                                <a className="btn btn-lg" href="https://urtodone.netlify.app/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-desktop" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                                <a className="btn btn-lg" href="https://github.com/neuroCody/react-task-tracker.git" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-github" style={{
                                    color: 'white', 
                                }}>
                                    </i>
                                </a>
                    </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            </Col>
            </Row>
            <Row >
            <Col>
            <div className='d-block d-lg-none' >
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button color="primary" id='Imperial' style={{marginBottom: '1rem', marginTop: '1rem'}}>Imperial Donuts</Button>
                </div>
                <UncontrolledCollapse toggler='Imperial'>
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
                        <h1> Imperial Donuts</h1>
                    </CardHeader>
                    <CardBody
                        style={{
                            color: '#f4f4f2'
                        }}
                    >
                    Small business website for a donut shop. Created using fundamental HTML/CSS principles and a heavy focus on flex-box design.
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
                    </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
            </Col>
            </Row>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button outline className="btn-sm topBtn">
                <Link
                    activeClass= "active"
                    to= 'top'
                    spy={true}
                    smooth={true}
                    duration={1200}
                    >
                To Top
                </Link>
            </Button>
                </div>
        </div>
    )
}

export default Portfolio;