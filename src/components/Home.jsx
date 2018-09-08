import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to my personal website</h2>
                    <p>Website built with React, React-Router, React-Bootstrap</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link> 
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/ dog.jpg" alt="dog" circle className="profile-pic" />
                        <h3>My dog</h3>
                        <p>This is my dog, Sky.</p>
                    </Col>  
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/ dog.jpg" alt="dog" circle className="profile-pic" />
                        <h3>My dog</h3>
                        <p>This is my dog, Bella.</p>
                    </Col>  
                </Row>
            </Grid>
        );
    };
}