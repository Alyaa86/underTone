import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import HomePage from './components/HomePage.js';
import questionStore from './stores/questionsStore.js';
import Q1 from './components/Q1.js';
import Results from './components/Results.js';
import QWarm from './components/QWarm.js';
import QCool from './components/QCool.js';
import QNeutral from './components/QNeutral.js';
import FinalResult from './components/FinalResults.js';
import Instructions from './components/Instructions.js';








export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
      <Switch>
          <Route path="/HomePage" render={ () => <HomePage questionStore={questionStore}/>} />
          <Route path="/Q1" render={ (props) => <Q1 {...props} questionStore={questionStore}/>} />
          <Route path="/Instructions" render={ (props) => <Instructions {...props} questionStore={questionStore} />} />
          <Route exact path= "/" render={ () => <HomePage  questionStore={questionStore}/>} />
          <Route path="/Results" render={ (props) => <Results {...props} questionStore={questionStore}/>} />
          <Route path="/QWarm" render={ (props) => <QWarm {...props} questionStore={questionStore} />} />
          <Route path="/QCool" render={ (props) => <QCool {...props} questionStore={questionStore} />} />
          <Route path="/QNeutral" render={ (props) => <QNeutral {...props} questionStore={questionStore} />} />
          <Route path="/FinalResult" render={ (props) => <FinalResult {...props} questionStore={questionStore} />} />
        </Switch>
      </NativeRouter>
      

    );
  }
}
