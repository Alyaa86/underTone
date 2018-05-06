import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  AsyncStorage
} from 'react-native';
import {  Link, Redirect } from 'react-router-native';

export default class DummyResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
        myKey: null
    }
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async setKey(){
    try {
      console.log(value)
      await AsyncStorage.setItem('Results');
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }
  
let results = {
  // this.state.results...
}
 AsyncStorage.mergeItem('whatever i want ', JSON.stringify(results), () => {
    AsyncStorage.getItem('whatever i want', (err, finalResult) => {
      console.log(finalResult);


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Demo AsyncStorage!
        </Text>


        <Button
          style={styles.formButton}
          onPress={this.getKey.bind(this)}
          title="Get Key"
          color="#2196f3"
          accessibilityLabel="Get Key"
        />

        <Text style={styles.instructions}>
          Stored key is = {this.state.myKey}
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  formButton: {
    borderWidth: 1,
    borderColor: "#555555",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
});
