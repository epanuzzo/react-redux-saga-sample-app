import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { MEMES_GET } from 'CONSTANTS';
import Content from 'COMPONENTS/Content';
import Loader from 'COMPONENTS/Loader';


class Main extends React.Component {
    componentDidMount() {
        if (!this.props.memes || this.props.memes.length === 0) {
            this.props.getMemes();
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="pt-4 pb-1">
                        <h1 className="text-center">Best entertainment content</h1>
                    </Col>
                </Row>
                <hr />
                { !this.props.memes
                    ? (<Loader />)
                    : (<Row className="pt-2 pb-4">
                        {this.props.memes.map((meme, key) => {
                            return (<Col md={4} key={key} className="mb-4">
                                <Content meme={ meme }></Content>
                            </Col>)
                        })}
                    </Row>)
                }
            </Container>
        );
    }
}

Main.propTypes = {
    getMemes: PropTypes.func.isRequired,
    memes: PropTypes.array
}

Main.defaultProps = {
  memes: [],
  getMemes: () => {}
};

function mapStateToProps(state) {   
    return { memes: state.main.memes }
}

function mapDispatchToProps(dispatch) {
    return { getMemes: () => dispatch({ type: MEMES_GET }) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 
