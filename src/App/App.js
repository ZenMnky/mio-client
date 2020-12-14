import {React, Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Components/Header/Header'

//styles
import 'normalize.css';
import './App.css';

//components

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;
