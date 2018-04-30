import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import HomePage from './components/HomePage.js';


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <HomePage />
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
