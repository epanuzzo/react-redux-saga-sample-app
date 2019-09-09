import React from 'react';

import Card from 'react-bootstrap/Card';

function Content(props) {
    if (!props.meme) {
        return null;
    }

    return (
        <Card>
            { props.meme.url && <Card.Img variant="top" src={ props.meme.url } /> }
            <Card.Body className="text-center">
                { props.meme.name && <Card.Title>{ props.meme.name }</Card.Title> }
                { props.meme.url && <a className="btn btn-outline-primary" href={props.meme.url} target="_blank" rel="noopener noreferrer" download>Get meme image</a> }
            </Card.Body>
        </Card>
    );
}

export default Content;
