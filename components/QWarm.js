import React from 'react';
import {  Link, Redirect } from 'react-router-native';
import { ImageBackground, StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title, DeckSwiper} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView, Image} from 'react-native';
import questionStore from '../stores/questionsStore'
import { CheckBox } from 'react-native-elements'
import HomePage from './HomePage.js';
import Modal from './InfoModal.js';
import FadeInView from './FadeIn.js';
import DummyResults from './DummyResults';
import resultStore from '../stores/resultStore'






export default class QWarm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            questionSet: this.props.questionStore.questionSet2,
            finalResults: this.props.resultStore.finalResults
            
        }
        
    }

    componentWillUnmount() {
      questionStore.Results = this.test1Results();
    }

    

    


  test2Results() {
    let currentlySelected = ''
      if (currentlySelected === this.state.questionSet.warm[0].name){
        return 'i am warm deep autumn'
          // return <Image source = {this.state.resultStore.finalResults[2].Image}/>
        } else if (currentlySelected === this.state.questionSet.warm[1].name){
          return 'i am warm Soft Autumn'
          // return <Image source = {this.state.resultStore.finalResults[6].Image}/>
        } else if (currentlySelected === this.state.questionSet.warm[2].name){
          return 'i am warm Light Spring'
          // return <Image source = {this.state.resultStore.finalResults[4].Image}/>
        }else {
          return 'i am warm Clear Spring'
          // return <Image source = {this.state.resultStore.finalResults[9].Image}/>
        }
                 
    }

     render(){  
       
    return (
        <Container style={styles.container}>
        <Header >
          <Left>
            <Link component = {Button} transparent to= '/HomePage' > 
              <Icon name="ios-home-outline"/>
            </Link>
          </Left>
          <Body>
            <Text>UNDERTONE APP</Text>
          </Body>
          <Right />
        </Header>
             <Content>
        <ImageBackground  source={require('../images/bkgrnd.gif')} 
          style={styles.quarterHeight}>
                <View >
                    
              </View>
              <View style={styles.buttonContainer}>
              <Button transparent style={styles.chooseText}><Text adjustsFontSizeToFit={true} style={styles.WhiteFont}> ← scroll to choose → </Text></Button>
              </View>
                <View >
                    <ScrollView horizontal={true}
                            directionalLockEnabled={false}>
                        <View style={styles.buttonContainer}>
                              <Button rounded style={styles.button}
                              onPress={()=>this.test2Results()}>
                                <Text style={styles.WhiteFont}>Choose Me if i look like you </Text>

                                </Button>
                        </View> 
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.warm[0].image}/>
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.warm[1].image}/>
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.warm[2].image}/>
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.warm[3].image}/>
                    </ScrollView>
                  </View>
              </ImageBackground>
                </Content>
              </Container>


    );
  }
}

// think about flex direction 
// what is /and how to use [Dimensions.get('window');]
const styles = StyleSheet.create({
  goButton:{
    flex:1,
    position: 'relative',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eea2ad',
    left:200,
    margin: 20
  },
  container: {
   flex:1,
   top:10,
   justifyContent: 'center',
  },
  WhiteFont: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex:1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  quarterHeight: {
    flex: .25,
    height: undefined, 
    width: undefined
  },
  threeQuarterHeight: {
    flex: .75,
    height: undefined, 
    width: undefined
    
  },
  button: {
    flex:1,
    top:15,
    width:250,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor: '#eea2ad',
  },
  imageSize:{
    flex:1, 
    height: 335, 
    width: 385,
    resizeMode: Image.resizeMode.cover,
  },
  chooseText:{
    flex:1,
    top:10,
    width:200,
    height: 35,
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: 'center'
  }
});

