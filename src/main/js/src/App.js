import React, { Component } from 'react';
import './App.css';
import SurveySchedulerFrontendApp from './pages/SurveySchedulerFrontendApp'

class App extends Component {
  render() {
    return (
      <div className="container">
        <SurveySchedulerFrontendApp/>
      </div>
    );
  }
}

export default App;