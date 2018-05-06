import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import HomePage from './components/HomePage.js';
import questionStore from './stores/questionsStore.js';
import Q1 from './components/Q1.js';
import MyModal from './components/InfoModal.js';
import DummyResults from './components/DummyResults.js';





export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
      <Switch>
          <Route path="/HomePage" render={ () => <HomePage questionStore={questionStore}/>} />
          <Route path="/Q1" render={ (props) => <Q1 {...props} questionStore={questionStore}/>} />
          <Route exact path= "/" render={ () => <HomePage  questionStore={questionStore}/>} />
          <Route path="/MyModal" render={ (props) => <MyModal {...props} questionStore={questionStore}/>} />
          <Route path="/DummyResults" render={ (props) => <DummyResults {...props} questionStore={questionStore}/>} />
        </Switch>
      </NativeRouter>
      

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
