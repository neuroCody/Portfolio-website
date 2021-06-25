import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll'
import Aos from 'aos';
import "aos/dist/aos.css";

const  About = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    
        return (
            <Container 
                id= "about"
                style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Card data-aos="fade-up" data-aos-delay= "400" 
                    style={{ 
                        backgroundColor: '#f4f4f2', 
                        color: 'black', 
                        marginBottom: '50px'
                    }}>
                    <CardBody>
                        <Row>
                            <Col md={12}>
                                <h1 style={{
                                    textAlign: "center",
                                    textDecoration: "underline rgb(168, 68, 93) solid"
                                    }}>About Me</h1>
                            </Col>
                            <Col lg={3}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Image 
                                        src="/assets/images/myPic_Circle.jfif" 
                                        style={{
                                            height: '160px',
                                            marginBottom: '10px',
                                            paddingLeft: '15%',
                                            paddingRight: '15%'

                                        }}
                                        alt='my headshot'
                                        roundedCircle
                                    />
                                </div>
                            </Col>
                            <Col lg={3}
                                style={{
                                    alignSelf: "center",
                                    borderRight: "1px solid black",
                                    }}
                            >
                                <h5><strong style={{fontSize: 20}}>Name</strong>:</h5>
                                <h6 style={{fontSize: 18}}>Cody Sullivan</h6>
                                <h5><strong style={{fontSize: 20}}>Email</strong>:</h5>
                                <h6 style={{fontSize: 18}}>
                                    <a href="mailto: sullivan.cody7@gmail.com" style={{color: 'inherit'}}>
                                        sullivan.cody7@gmail.com
                                    </a>
                                </h6>
                                <h5><strong>Phone</strong>:</h5>
                                <h6 style={{fontSize: 18, fontFamily: 'Roboto'}}>(303) 859-6423</h6>
                            </Col>
                            <Col lg={6}
                                style={{
                                    alignSelf: "center",
                                    marginRigt: '5px',
                                }}
                            >
                                <p style={{
                                    textAlign: "left",
                                    fontSize: 17,
                                    padding: 10}}> 
                                    Located in the heart of the Rocky Mountains, I am a self taught web developer who has over a decade of technical experience working 
                                    in professional environments. My problem solving skills and eye for detail generated 
                                    large revenue streams for previous employers in the real estate foreclosure space. 
                                    I would now like to apply those abilities to software development.
                                </p>
                            </Col>
                            
                        </Row>
                        <Row
                            style={{
                                style: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div>
                            <Button outline className="btn-sm hireBtn2">
                                <Link
                                    activeClass= "active"
                                    to= 'hireMe'
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                >
                                    Hire Me!
                                </Link>
                            </Button>
                            </div>
                            <div>
                            <Button outline className="btn-sm projectsBtn2">
                                <Link
                                    activeClass= "active"
                                    to= 'projects'
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                >
                                Projects
                                </Link>
                            </Button>

                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        )
    
}

export default About;