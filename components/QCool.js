import React from 'react';
import {  Link } from 'react-router-native';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';
import { ScrollView, Image} from 'react-native';
import FadeInView from './FadeIn.js';
import questionStore from '../stores/questionsStore'
import HomePage from './HomePage.js';
import FinalResult from './FinalResults.js';
import {observer} from 'mobx-react'

export default observer(class QCool extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            questionSet: this.props.questionStore.questionSet2,
        }
        
    }

  test2Results(currentlySelected) {
      if (currentlySelected === this.state.questionSet.cool[0].name){
        questionStore.finalResults = this.state.questionSet.cool[0].result
        } else if (currentlySelected === this.state.questionSet.cool[1].name){
          questionStore.finalResults = this.state.questionSet.cool[1].result
        } else if (currentlySelected === this.state.questionSet.cool[2].name){
          questionStore.finalResults = this.state.questionSet.cool[2].result
        }else if (currentlySelected === this.state.questionSet.cool[3].name){
          questionStore.finalResults = this.state.questionSet.cool[3].result
        }
        this.props.history.push('/FinalResult')         
    }

     render(){  
       
    return (
        <Container style={styles.container}>
        <Header >
          <Left>
            <Link component = {Button} transparent to= '/HomePage' > 
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
        <ImageBackground  source={require('../images/bkgrnd.gif')} 
          style={styles.quarterHeight}>
                <View >
                    
              <View style={styles.buttonContainer}>
              <Button transparent style={styles.chooseText}>
                <Row>
                <Col>
                  <Text adjustsFontSizeToFit={true} 
                  style={styles.WhiteFont}> choose what most looks like you</Text>
                  <Text adjustsFontSizeToFit={true} 
                  style={styles.WhiteFont}> ← scroll to choose → </Text>
                </Col>
                </Row>
              </Button>
              </View>
              </View>
                <View >
                    <ScrollView horizontal={true}
                            directionalLockEnabled={false}>
                        <ScrollView>   
                        <Row style={styles.buttonContainer}>
                        <Col>
                            <Button rounded style={styles.button}
                                    onPress={()=>this.test2Results('Deep Winter')}>
                              <Row>
                              <Col>
                                <Text style={styles.WhiteFont}> I am {this.state.questionSet.cool[0].name}</Text>
                                <Text style={styles.WhiteFont}>Let See My Colors</Text>
                              </Col>
                              </Row>
                            </Button>
                              
                            <Button rounded style={styles.button}
                                    onPress={()=>this.test2Results('Clear Winter')}>
                              <Row>
                              <Col>
                                <Text style={styles.WhiteFont}> I am {this.state.questionSet.cool[1].name}</Text>
                                <Text style={styles.WhiteFont}>Let See My Colors</Text>
                              </Col>
                              </Row>
                            </Button>

                            <Button rounded style={styles.button}
                                    onPress={()=>this.test2Results('SoftSummer')}>
                              <Row>
                              <Col>
                                <Text style={styles.WhiteFont}> I am {this.state.questionSet.cool[2].name}</Text>
                                <Text style={styles.WhiteFont}>Let See My Colors</Text>
                              </Col>
                              </Row>
                            </Button>
                            
                            <Button rounded style={styles.button}
                                    onPress={()=>this.test2Results('Light Summer')}>
                              <Row>
                              <Col>
                                <Text style={styles.WhiteFont}> I am {this.state.questionSet.cool[3].name}</Text>
                                <Text style={styles.WhiteFont}>Let See My Colors</Text>
                              </Col>
                              </Row>
                            </Button>

                        </Col>
                        </Row>
                        </ScrollView> 
                        
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.cool[0].image}/>
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.cool[1].image}/>
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.cool[2].image}/>
                        <Image style={styles.imageSize} 
                               source={this.state.questionSet.cool[3].image}/>
                   
                    </ScrollView>
                  </View>
              </ImageBackground>
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
    width: 350
  },
  quarterHeight: {
    flex: .25,
    height: undefined, 
    width: undefined
  },
  button: {
    flex:1,
    top:15,
    margin:20,
    width:250,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor: '#eea2ad',
  },
  imageSize:{
    flex:1, 
    margin: 20,
    height: 500, 
    width: 370,
    resizeMode: Image.resizeMode.cover,
  },
  viewSize:{
    flex:1,
    top: 30, 
    height: 555, 
    width: 370,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
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

