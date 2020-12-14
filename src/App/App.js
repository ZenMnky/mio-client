import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

//styles
import 'normalize.css';
import './App.css';

//components
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import MainContainer from '../Components/MainContainer/MainContainer'
import HomeBanner from '../Components/HomeView/HomeBanner'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header />
          <MainContainer>
            <HomeBanner />
          </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
