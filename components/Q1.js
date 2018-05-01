import React from 'react';
import { ImageBackground, StyleSheet, Text, View,  } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView, Image } from 'react-native';

/*
* Aziz: I remember we discussed making this component more dynamic
* talk to me in class so we can plan it out
*/

export default class Q1 extends React.Component {
    render()
   {
    return (
        <ScrollView>
          {/* Aziz: rather than putting this in a ScrollView try to style it to fit on the screen */}
              <Image  source={require('../images/bkgrnd.gif')}
          style={{height: 700, width: null, flex: 9}}/>
            <Image  source={require('../images/frontPage.png')}
          style={{height: 360, width: null, flex: 9}}/>
        </ScrollView>
    );
  }
}
