import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, AsyncStorage, ImageBackground, Image } from 'react-native';
import {  Link } from 'react-router-native';
import { Container, Header, Content, Icon, Left, Body, Right, Button} from 'native-base';
import {observer} from 'mobx-react';
import questionStore from '../stores/questionsStore';
import FadeInView from './FadeIn.js';



export default observer(class Resuts extends Component {

  constructor(props) {
    super(props);
    this.state = {
        myKey: null
    }
  }

  // async getKey() {
  //   try {
  //     const value = await AsyncStorage.getItem('@MySuperStore:key');
  //     this.setState({myKey: value});
  //   } catch (error) {
  //     console.log("Error retrieving data" + error);
  //   }
  // }


  seasonSelect(){
    let firstResults = this.props.questionStore.Results
    if (firstResults === 'Warm') {
      this.props.history.push('/QWarm');
    } else if (firstResults === 'Cool') {
      this.props.history.push('/QCool');
    } else {
      this.props.history.push('/QNeutral');
    }
  }

  render() {
    return (

        <ImageBackground  source={require('../images/bkgrnd.gif')} 
          style={styles.quarterHeight}>

       <Container style={styles.container}>
        <Header >
          <Left>
            <Link transparent to= '/HomePage' >
              <Icon name="arrow-back"/>
            </Link>
          </Left>
          <Body>
            <Text>UNDERTONE APP</Text>
          </Body>
          <Right />
        </Header>
        <Content>
             <FadeInView>
             <Content>
             <View style={styles.buttonContainer}>
             
                  <Text style={styles.bigWhite}>
                    You have :{'\n'} {this.props.questionStore.Results} Skin 
                  </Text>
                 
                  </View>
                  </Content>
              
                  <Content>
                    <View style={styles.buttonContainer}>    
                  <Button rounded style= {styles.button} onPress = {()=>this.seasonSelect()} >
                    <Text style={styles.WhiteFont}>Go Next</Text>
                  </Button>
              </View>
                </Content>
              </FadeInView>
                </Content>
              </Container>
              </ImageBackground>
      
        


      
    );
  }
})

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
    ...StyleSheet.absoluteFillObject,
    top: null,
  },
  WhiteFont: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex:1,
    margin: 60,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  quarterHeight: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
                             
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
  bigWhite: { 
    top: 70,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
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
