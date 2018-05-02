import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, ListView } from 'react-native';
import thumbnail_skin 3.jpg from '../images.png';
import thumbnail_skin 4.jpg from '../images.png';
import thumbnail_skin 5.jpg from '../images.png';
import thumbnail_skin 6.jpg from '../images.png';
import thumbnail_khaki 7.jpg from '../images.png';
import thumbnail_grey 8.jpg from '../images.png';
import thumbnail_brown 9.jpg from '../images.png';
import thumbnail_black 10.jpg from '../images.png';
import thumbnail_ivory 11.jpg from '../images.png';
import thumbnail_white 12.jpg from '../images.png';
import thumbnail_salamon 13.jpg from '../images.png';
import thumbnail_fuchsia 14.jpg from '../images.png';
import thumbnail_hazel 15.jpg from '../images.png';
import thumbnail_blue 16.jpg from '../images.png';
import thumbnail_camel 17.jpg from '../images.png';
import thumbnail_cobalt blue 18.jpg from '../images.png';
import thumbnail_orange 19.jpg from '../images.png';
import thumbnail_magenta 20.jpg from '../images.png';
import thumbnail_gold 21.jpg from '../images.png';
import thumbnail_silver 22.jpg from '../images.png';
import list from './list';
import { Link } from 'react-router-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, List, ListItem, } from 'native-base';
import {observer} from 'mobx-react';
import openMap from 'react-native-open-maps';
import store from '../Store/Store.js';

export default observer(class X extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          listViewData: list,
        };
    }
    setCurrent(data){
        store.currentCoffeShop = data;
    }
    clickChoice(){
        let A = {
            A: this.state.image,
            option: this.state.option,
            quantity: ++
        }
        if (store.A.name <10){
        store.cart.push(coffe);
       
        }
    }
      chooceButton()
    if A<10 ()=> {
  const buttons = [];
  for (let A =0; A<10; A++){
    buttons.push(<CounterButton />);
    store.currentCartFrom = this.state.detail
  }
  
  return buttons;
}


  render() {
    