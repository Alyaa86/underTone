import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import HomePage from './components/HomePage.js';
import questionStore from './stores/questionsStore.js';
import Q1 from './components/Q1.js';



export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
      <Switch>
          <Route path="/HomePage" render={ () => <HomePage questionStore={questionStore}/>} />
          <Route path="/Q1" render={ () => <Q1 questionStore={questionStore}/>} />
          <Route exact path= "/" render={ () => <HomePage questionStore={questionStore}/>} />
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
