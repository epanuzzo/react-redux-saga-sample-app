import React from 'react';
import './Footer.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

function Footer() {
    const date = new Date();

    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-left">
                        <Link to="/about">About</Link>
                    </Col>
                    <Col md={6} className="text-center text-md-right">
                        <small>Copyright | { date.getFullYear() }</small>
                    </Col>
                </Row>
            </Container>
        </div>        
    );
}

export default Footer;
