import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '../../Context/AppContext'

import SearchView from './SearchView';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <SearchView />
        </Provider>
    </BrowserRouter>, 
    div
);
  ReactDOM.unmountComponentAtNode(div);
});