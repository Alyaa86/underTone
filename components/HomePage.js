import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right, Title , List, Tab, Tabs, Icon, Drawer, View} from 'native-base';
import { Footer, FooterTab, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import Q1 from './Q1.js';
import MySideBar from './SideBar.js';
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
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    }
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<MySideBar closeDrawer={closeDrawer.bind(this)}/>} >
      <ImageBackground  source={require('../images/bkgrnd.gif')} 
                        style={{
                            flex: 1,
                            alignSelf: 'stretch',
                            width: undefined,
                            height: undefined
                           }}>
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => openDrawer()}>
              <Icon name="menu"/>
            </Button>
          </Left>
          <Body >
            <Text>UNDERTONE APP</Text>
          </Body>
          <Right />
        </Header>
        <Content >
      <View >
        <Text style={styles.bigWhite}>READY{'\n'}TO KNOW YOUR{'\n'}UNDERTONE?</Text>
          
 
        <Link component={Button} rounded style={styles.goButton} to='/Q1' onPress={() => alert("Adjust Your Screen Brightness to Medium .. ThankYou ❤️")}>

            <Icon name='ios-thumbs-up' style={styles.WhiteFont}/>
            <Text style={styles.WhiteFont}>GO</Text>
          </Link>
    </View>
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
       </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: null,
  },
    container2: {
    justifyContent: 'center',
    alignItems: 'center'
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
    top: 50,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  form:{
    top: 50,
    alignSelf: "center"
  },
  WhiteFont: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
  },
  goButton:{
    position: 'absolute',
    bottom:-250, 
    width: 300,
    height:100,
    alignSelf: "center",
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