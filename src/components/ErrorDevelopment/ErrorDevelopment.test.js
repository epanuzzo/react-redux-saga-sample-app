import React from 'react';
import ReactDOM from 'react-dom';
import ErrorDevelopment from './ErrorDevelopment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorDevelopment />, div);
  ReactDOM.unmountComponentAtNode(div);
});
