import React from 'react';
import {  Link, Redirect } from 'react-router-native';
import { ImageBackground, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title, DeckSwiper} from 'native-base';
import { Col, Row } from 'react-native-easy-grid';
import { ScrollView, Image} from 'react-native';
import questionStore from '../stores/questionsStore'
import { CheckBox } from 'react-native-elements'
import HomePage from './HomePage.js';
import FadeInView from './FadeIn.js';
import Results from './Results';





export default class Q1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            questionSet: this.props.questionStore.questionSet1[0],
            countA : 0,
            countB : 0,
            lastPicked: []
        }
        
    }

    componentWillUnmount() {
      questionStore.Results = this.test1Results();
    }

    nextButtonA(){
       const addCountA = this.state.countA + 1
       const nextIndex = this.state.questionSet.position + 1;
       const lastPicked = this.state.lastPicked.concat(['A']);
       if (nextIndex === 10) {
           this.props.history.push('/Results');
       } else {
       this.setState({
           questionSet:this.props.questionStore.questionSet1[nextIndex],
           countA: addCountA,
           lastPicked: lastPicked

       })
   }
 }
    
    nextButtonB(){
        const addCountB = this.state.countB + 1
        const nextIndex = this.state.questionSet.position + 1;
        const lastPicked = this.state.lastPicked.concat(['B']);
        if (nextIndex === 10) {
            this.props.history.push('/Results');
        } else {
          this.setState({
              questionSet:this.props.questionStore.questionSet1[nextIndex], 
              countB: addCountB,
              lastPicked: lastPicked

          });
        }
    }

    backButton() {
      const countA = this.state.countA -1 
      const countB = this.state.countB -1 
      const backIndex = this.state.questionSet.position - 1 
      const lastPicked = this.state.lastPicked && this.state.lastPicked.pop()

      

      if(backIndex === -1) {
        this.props.history.push('/HomePage');
      }

    if (lastPicked === 'A')
    {
      this.setState({
            questionSet:this.props.questionStore.questionSet1[backIndex], 
            countA: this.state.countA -1})
    } else if (lastPicked === 'B')
    {
       this.setState({
            questionSet:this.props.questionStore.questionSet1[backIndex],
            countB: this.state.countB -1
        });
    }
    
  }


  test1Results() {
    const countA = this.state.countA
    const countB = this.state.countB

      if (countA > 5){
          return "Cool"
        }else if (countA === 5 || countB === 5 ){
          return "Neutral"
        }else if (countA < 5){
          return "Warm"
        }
                 
    }
    

     render(){  
       
    return (
        <ImageBackground  source={require('../images/bkgrnd.gif')} 
          style={styles.quarterHeight}>
        <Container style={styles.container}>
        <Header >
          <Left>
            <Button transparent onPress={()=>this.backButton()} >
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Text>UNDERTONE APP</Text>
          </Body>
          <Right />
        </Header>
             <Content>
      <FadeInView>
              <Row style={{margin: 30}}>
              <Col>
              <View >
              <Button transparent style={styles.chooseText}>
              <Text style={styles.WhiteFont}>Choose What Makes Your Skin Glow</Text>
              </Button>
              </View>
              <View style={styles.buttonContainer}>
              <Button transparent style={styles.chooseText}>
              <Text style={styles.scrollFont}> 👈🏻 Scroll to Choose 👉🏻 </Text>
              </Button>
              </View>
              </Col>
              </Row>
                <View >
                    <ScrollView horizontal={true}
                            directionalLockEnabled={false}>
                        <TouchableOpacity onPress={()=>this.nextButtonA()}>
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.A.image}/>
                               </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.nextButtonB()}>
                        <Image style={styles.imageSize}
                               source={this.state.questionSet.B.image}/>
                               </TouchableOpacity>
                    </ScrollView>
                  </View>

              </FadeInView>
                </Content>
              </Container>
              </ImageBackground>


    );
  }
}

// think about flex direction 
// what is /and how to use [Dimensions.get('window');]
const styles = StyleSheet.create({
  container: {
   flex:1,
   top:null,
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
  scrollFont: {
    color: '#79cdcd',
    fontWeight: 'bold',
    fontSize: 25,
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
    flex: 1,
    height: undefined, 
    width: undefined,
    alignSelf: 'stretch',
  },
  imageSize:{
    flex:1, 
    height: 466, 
    width: 385,
    resizeMode: Image.resizeMode.cover,
  },
  chooseText:{
    flex:1,
    top:10,
    width:370,
    height: 35,
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: 'center'
  }
});

