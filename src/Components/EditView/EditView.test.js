import React from 'react';
import ReactDOM from 'react-dom';
import EditView from './EditView';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '../../Context/AppContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <EditView />
        </Provider>
    </BrowserRouter>, 
    div
);
  ReactDOM.unmountComponentAtNode(div);
});