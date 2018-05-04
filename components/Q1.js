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


export default class Q1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            questionSet1: this.props.questionStore.questionSet1[0],
            countA : 0,
            countB : 0,
            currentlySelected: {}
        };
    }


    nextButtonA(){
        const addCountA = this.state.countA + 1
        const Question = this.state.questionSet1.position + 1;
        this.setState({
            questionSet1:this.props.questionStore.questionSet1[Question], 
            countA: addCountA 

        })
    }

    nextButtonB(){
        const addCountB = this.state.countB + 1
        const Question = this.state.questionSet1.position + 1;
        this.setState({
            questionSet1:this.props.questionStore.questionSet1[Question], 
            countB: addCountB,
            

        })
    }


    // backButton(){
    //   this.props.navigation.navigate('/HomePage')
    // }


        // const count = this.state.countA -1 
        // const Question = this.state.questionSet1.position - 1
        // const lastPosition = this.state.questionSet1.position[0]
        // let currentlySelected = this.state.currentlySelected
        // if (currentlySelected === this.state.questionSet1.A ){
        //   this.setState({
        //     questionSet1:this.props.questionStore.questionSet1[Question], 
        //     countA: count})}
       // } else 
       // if (this.props.questionStore.questionSet1[0]) {
          // return <HomePage questionStore={questionStore}/>
          
       //  } else {
       //    this.setState({
       //      questionSet1:this.props.questionStore.questionSet1[Question]
       //  })
       //  }

      
    

    // how to redirect to home page if position < 0 
    //  if she choose all B  we decreasing one A all the time when back .. must modify the function .. must be if a is choosen deacrease a 
    // ... this.state.position < 0 ? redirect to home page  ???
    // ... this.state.count === 0 ? this.state.count: stopfunction  ???
  

    render()
   {
       
       
    return (
        <Container style={styles.container}>
        <Header >
          <Left>
            <Link transparent to='/HomePage' >
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
                    <View style={styles.buttonContainer}>
                   
                        <Button rounded  style={styles.button} 
                            onPress={()=>this.nextButtonA()}>
                            <Text style={styles.WhiteFont}> {this.state.questionSet1.A.name}</Text>
                        </Button>
                    
                    </View>
                    <View style={styles.buttonContainer}>
                          <Button rounded style={styles.button}
                          onPress={()=>this.nextButtonB()}>
                            <Text style={styles.WhiteFont}> {this.state.questionSet1.B.name}</Text>
                            </Button>
                    </View> 
              </View>
              <View style={styles.buttonContainer}>
              <Button transparent style={styles.chooseText}><Text adjustsFontSizeToFit={true} style={styles.WhiteFont}>choose what makes your skin glow</Text></Button>
              </View>
              <View style={styles.buttonContainer}>
              <Button transparent style={styles.chooseText}><Text adjustsFontSizeToFit={true} style={styles.WhiteFont}> ← scroll to choose → </Text></Button>
              </View>
              </ImageBackground>
                <View >
                    <ScrollView horizontal={true}
                            directionalLockEnabled={false}>
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet1.A.image}/>
                        <Image style={styles.imageSize}
                               source={this.state.questionSet1.B.image}/>
                    </ScrollView>
                  </View>
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
    width:400,
    height: 35,
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: 'center'
  }
});

