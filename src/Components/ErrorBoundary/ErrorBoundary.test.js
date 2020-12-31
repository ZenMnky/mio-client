import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AboutView from '../AboutView/AboutView';
import ErrorBoundary from './ErrorBoundary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <AboutView />
        </BrowserRouter>
    </ ErrorBoundary>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});