import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Table} from 'reactstrap';

class About extends Component {

    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 center-block text-center p-5">
                    <h1>What is Projhex?</h1>
                </div>
            </div>
            <div className="row row-content justify-content-center">
                <div className="col col- align-self-center">
                    <h3>Structured Creativity</h3>
                    <p>Projhex is a dream of founder and creator, Cody Sullivan, that with enough support humanity can succeed together. Our way of contrbuting to this belief is providing a free and reliable service that allows creatives to relaize their dreams. With fewer setbacks and more opportinites to find like minded people.</p>
                </div>
                <div className="col-6">
                    <img className="img-fluid d-none d-md-block" src="/assets/images/teamwork-sunset.jpg" alt="Teamwork Sunset" />
                </div>
            </div>
            <div className="row row-content justify-content-center">
                <div className="col-9">
                    <Card className="bg-secondary">
                        <CardBody className="blockquote text-light">
                            <p className="mb-0">"Few people have any next, they live from hand to mouth without a plan, and are always at the end of their line."</p>
                            <footer className="blockqoute-footer">-Ralph Waldo Emerson</footer>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content justify-content-center">
            <div className="col-6 center-block">
                <h3>Company Overview</h3>
                <div className="table-responsive">
                    <Table className="table-dark">
                        <thead className="thead-light">
                            <tr>
                                <th></th>
                                <th>U.S.</th>
                                <th>Global</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Employees</th>
                                <td>40</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <th>Creators</th>
                                <td>12,345</td>
                                <td>30,468</td>
                            </tr>
                            <tr>
                                <th>Completed Projects</th>
                                <td>2,047</td>
                                <td>10,546</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default About;