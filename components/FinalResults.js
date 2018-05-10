import React, { Component } from 'react';
import {  Link, Redirect } from 'react-router-native';
import { ImageBackground, StyleSheet, Text, TextInput, View, Alert, CameraRoll, Dimensions, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title, DeckSwiper} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView, Image} from 'react-native';
import questionStore from '../stores/questionsStore'
import { CheckBox } from 'react-native-elements'
import HomePage from './HomePage.js';
import { Footer, FooterTab } from 'native-base';
import FadeInView from './FadeIn.js';
import Results from './Results';
import Lightbox from 'react-native-lightbox';
import {observer} from 'mobx-react';



export default observer(class FinalResults extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cameraRollUri: null,
            myKey: null
        }
        
    }
    
    saveImage() {
    AsyncStorage.setItem('image', questionStore.finalResults)
  }

    render(){  
    return (
        <Container style={styles.container}>
          <Header >
            <Left>
              <Link transparent to='/HomePage' >
                <Icon name="ios-home-outline"/>
              </Link>
            </Left>
              <Body>
                <Text>UNDERTONE APP</Text>
              </Body>
            <Right />
          </Header>
          <Content>
            <FadeInView >
            
            <Lightbox swipeToDismiss= {true}>
            
               <Image style={styles.imageSize} 
               source= {questionStore.finalResults}/> 
               </Lightbox>
               <Lightbox swipeToDismiss= {true}>
            
               <Image style={styles.imageSize} 
               source= {questionStore.finalResults}/> 
               </Lightbox>
               
               <Footer style={styles.footer}>
                <FooterTab>
                  <Button>
                    <Text style={styles.footerText}>⚠️ Press on the picture and screen capture 📸</Text>
                  </Button>
                </FooterTab>
              </Footer>
            </FadeInView>
            

          </Content>
        </Container>
    );
  }
})

const styles = StyleSheet.create({
  container: {
   flex:1,
   top:10,
   justifyContent: 'center',
  },
  imageSize:{
    flex:1, 
    height: 555, 
    width: 375,
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'center',
    alignSelf: "center",
  },
  footer:{
    paddingBottom:25,
    backgroundColor: '#c4b9c7'
  },
  footerText:{
    fontSize:15,
    fontWeight: 'bold',
  }
})

