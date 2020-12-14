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
import PageNotFound from '../Components/PageNotFound/PageNotFound'
import SearchView from '../Components/SearchView/SearchView'
import AddView from '../Components/AddView/AddView'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header />
          <MainContainer>
            <Switch>
              <Route exact path='/' component={HomeBanner} />
              <Route path='/view' component={HomeBanner} />
              <Route path='/view/:id' component={HomeBanner} />
              <Route path='/search' component={SearchView} />
              <Route path='/add' component={AddView} />
              <Route component={PageNotFound} />
            </Switch>
          </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
