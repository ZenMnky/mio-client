import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '../../Context/AppContext'

import AddRelationshipForm from './AddRelationshipForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <AddRelationshipForm />
        </Provider>
    </BrowserRouter>, 
    div
);
  ReactDOM.unmountComponentAtNode(div);
});