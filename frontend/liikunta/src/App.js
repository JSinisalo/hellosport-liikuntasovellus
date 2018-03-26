import React, { Component } from 'react';
import './App.css';
import Test from './posts/Test'
import MainLayout from './layouts/MainLayout';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/test" render={() => <MainLayout content={<Test/>}/>}/>

        </Switch>
      </div>
    );
  }
}

export default App;
