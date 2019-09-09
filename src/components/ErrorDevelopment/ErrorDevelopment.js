import React from 'react';

function ErrorDevelopment({ error, errorInfo }) {
    return (
        <div className="text-center py-4 px-4">
            <h1 className="mb-4 text-primary">Something went wrong!</h1>
            { error && <div><b>Error:</b> { error.toString() } </div> }
            { errorInfo && <div><b>Details:</b> { errorInfo.componentStack }</div> }
          </div>
    );
}

export default ErrorDevelopment;
