import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title , List, Tab, Tabs} from 'native-base';
import { Footer, FooterTab, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import Q1 from './Q1.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
        this.satate= {
            img : '',
            text: 'Useless Placeholder'
        }
    }
  render() {
    return (
      <ImageBackground  source={require('../images/bkgrnd.gif')} 
          style={{height: 700, width: null, flex: 9}}>
      <Container style={styles.container}>

        <Header>
          <Left/>
          <Body>
            <Text>UNDERTONE APP</Text>
          </Body>
          <Right />
        </Header>
        <Content>
        <Text style={styles.bigWhite}> READY TO KNOW YOUR UNDERTONE?</Text>
        
          <Form style={styles.form}>
            <Item stackedLabel >
              <Label>Write Your Name Here .. </Label>
              <Input style={styles.WhiteFont} />
            </Item>
             <Item  stackedLabel>
              <Label>Give us Your Email to send you the results </Label>
              <Input style={styles.WhiteFont} />
            </Item>
          </Form>
 
        <Button rounded info style={styles.button}>
            <Text style={styles.WhiteFont}>GO</Text>
          </Button>
    
         </Content>  
        
        
        <Footer>
          <FooterTab>
            <Button>
              <Text> CopyRights to Reem and Alyaa </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: null,
  },
  divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
  Content: {
    top: 75,
    marginLeft: 0,
    alignSelf: "center"
  },
  bigWhite: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    alignSelf: "center"
  },
  form:{
    top: 50,
    alignSelf: "center"
  },
  WhiteFont: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    
    
    
  },
  button:{
    flex: 1 ,
    position: 'absolute',
    bottom:-170,
    left:250, 
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
    
    


  }
});