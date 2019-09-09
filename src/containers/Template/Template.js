import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import Navigation from 'COMPONENTS/Navigation';
import Footer from 'COMPONENTS/Footer';

class App extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <Container>
                    { this.props.children }
                </Container>
                <Footer />
            </>
        );
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired
}

export default withRouter(connect()(App)); 
