import React from 'react';
import NavSideBarDance from '../components/NavSideBarDance';
import {Container, Row, Col} from 'react-bootstrap';
import AboutDance from '../components/AboutDance';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                <Col lg={1}></Col>
                    <Col lg={10}>
                        <h1 className="classes-header">About Us</h1> 
                        <h4>PLACEHOLDER</h4>  
                        <p>Insert picture of Val's face here</p>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
                <Row>
                <Col lg={1}></Col>
                    <Col lg={10}>
                    <hr className="line-break"/>    
                    </Col>
                    <Col lg={1}></Col> 
                </Row>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={3}>
                        <NavSideBarDance />    
                    </Col>
                    <Col lg={7}><AboutDance /></Col>
                    <Col lg={1}></Col>
                </Row>
                <Row>

                </Row>
            </Container>
            <Footer />
        </div>
    )
}
export default AboutUs;