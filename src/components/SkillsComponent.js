import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Aos from 'aos';
import "aos/dist/aos.css";

const Skills = () => {
    useEffect(() => {
        Aos.init({});
    }, []);

    return(
        <Container 
        id= "about"
        style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
            <Card data-aos="fade-up" data-aos-delay= "500"
                style={{ 
                    backgroundColor: '#f4f4f2', 
                    color: 'black', 
                    marginBottom: '50px'
                }}
            >
                <CardBody>
                    <Row>
                        <Col>
                            <h2 style={{
                                    textAlign: "center",
                                    textDecoration: "underline purple solid",
                                    marginBottom: 40}}
                            >Programming Skills
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={5}>
                        <img src="./assets/images/HTML_logo.png" style={{
                            height: 200, 
                            width: 'auto',
                            boxShadow: '10px 5px 5px gray',
                            marginBottom: 40,
                            borderRadius: 4
                        }} />
                        </Col>
                        <Col md={3} sm={5}>
                        <img src="./assets/images/css3.svg" style={{
                            height: 200, 
                            width: 'auto',
                            boxShadow: '10px 5px 5px gray',
                            marginBottom: 40,
                            borderRadius: 4
                        }} />
                        </Col>
                        <Col md={3} sm={5}>
                        <img src="./assets/images/JavaScript-logo.png" style={{
                            height: 200, 
                            width: 200,
                            boxShadow: '10px 5px 5px gray',
                            marginBottom: 40,
                            borderRadius: 4
                        }} />
                        </Col>
                        <Col md={3} sm={5}>
                        <img src="./assets/images/node-js-logo.png" style={{
                            height: 200, 
                            width: 200,
                            boxShadow: '10px 5px 5px gray',
                            marginBottom: 40,
                            borderRadius: 4
                        }} />
                        </Col>
                        <Col md={3} sm={5}>
                        <img src="./assets/images/react-js-logo.png" style={{
                            height: 200, 
                            width: 200,
                            boxShadow: '10px 5px 5px gray',
                            marginBottom: 40,
                            borderRadius: 4
                        }} />
                        </Col>
                        <Col md={3} sm={5}>
                        <img src="./assets/images/react-native-logo.png" style={{
                            height: 200, 
                            width: 200,
                            boxShadow: '10px 5px 5px gray',
                            marginBottom: 40,
                            borderRadius: 4
                        }} />
                        </Col>
                        <Col md={3} sm={5}>
                        <img src="./assets/images/redux-logo.png" style={{
                            height: 200, 
                            width: 200,
                            boxShadow: '10px 5px 5px gray',
                            marginBottom: 40,
                            borderRadius: 4
                        }} />
                        </Col>
                        <Col md={3} sm={5}>
                        <img src="./assets/images/bootstrap-logo.png" style={{
                            height: 200, 
                            width: 200,
                            boxShadow: '10px 5px 5px gray',
                            marginBottom: 40,
                            borderRadius: 4
                        }} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>

    )
}

export default Skills;