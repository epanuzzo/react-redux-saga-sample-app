import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class About extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="py-4">
                        Project is under active development.
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(connect(null, null)(About)); 
