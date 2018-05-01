import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right, Title , List, Tab, Tabs, Icon} from 'native-base';
import { Footer, FooterTab, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import Q1 from './Q1.js';
import questionStore from '../stores/questionsStore'



export default class App extends React.Component {
  constructor(props){
    super(props);
        this.satate= {
            img : '',
            questionSet: {}
        }
    }
 componentDidMount(){
  this.setState({questionSet: questionStore})
 }

  render() {
    return (
      <ImageBackground  source={require('../images/bkgrnd.gif')} 
          style={{height: 700, width: null, flex: 9}}>
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="menu"/>
            </Button>
          </Left>
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
 
        <Link component={Button} rounded style={styles.goButton} to='/Q1' onPress={() => alert("Adjust Your Screen Brightness to Max .. ThankYou ❤️")}>

            <Icon name='ios-thumbs-up'/>
            <Text style={styles.WhiteFont}>GO</Text>
          </Link>
    
         </Content>  
        
        
        <Footer style={styles.footer}>
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
  goButton:{
    flex: 1 ,
    position: 'absolute',
    bottom:-170,
    left:250, 
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eea2ad'

  },
  header:{
    height: 80,
  },
  footer:{
    top:25,
    paddingBottom:25,
    backgroundColor: '#c4b9c7'
  }
});