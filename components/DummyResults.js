import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  ImageBackground,
  Image
} from 'react-native';
import {  Link, Redirect } from 'react-router-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right, Title, DeckSwiper, Button} from 'native-base';
import {observer} from 'mobx-react'
import questionStore from '../stores/questionsStore'



export default observer(class DummyResuts extends Component {

  constructor(props) {
    super(props);
    this.state = {
        myKey: null
    }
  }
componentWillUnmount() {
      questionStore.Results = this.props.test1Results(); 
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
    let firstResults = this.questionStore.Results
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

        <ImageBackground  source={require('../images/bkgrnd.gif')} 
          style={styles.quarterHeight}>
                <View >
                   
                        
                            <Text style={styles.WhiteFont}>
                              Stored key is = {this.props.questionStore.Results}
                            </Text>
                        
                    <View style={styles.buttonContainer}>
                    <Button round style= {styles.goButton} onPress = {()=>this.seasonSelect()}>
                    <Text style={styles.WhiteFont}> Next Test</Text>
                    </Button>

                    </View>
              </View>

              </ImageBackground>
                </Content>
              </Container>
      
        


      
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
