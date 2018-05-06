import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, AsyncStorage, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';

import {  Link, Redirect } from 'react-router-native';
import DummyResults from './DummyResults.js'

export default class MyModal extends Component {
  state = {
    modalVisible: false,
    myKey: null
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  async saveKey(value) {
    try {
      console.log(value)
      await AsyncStorage.setItem('@MySuperStore:key', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter key you want to save!"
              value={this.state.myKey}
              onChangeText={(value) => this.saveKey(value)}
              />

              <Link component={Button} onPress={() => {this.setModalVisible(!this.state.modalVisible),
                  (value) => this.saveKey(value, data)}} to= '/DummyResults' >
                
                <Text>Hide Modal</Text>
              </Link>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#555555",
  },
});