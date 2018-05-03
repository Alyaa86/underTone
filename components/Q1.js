import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';
import {RkButton} from 'react-native-ui-kitten';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView, Image} from 'react-native';
import questionStore from '../stores/questionsStore'
import { CheckBox } from 'react-native-elements'


export default class Q1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionSet1: this.props.questionStore.questionSet1[0],
            countA : 0,
            countB : 0,
        };
    }


    nextButtonA(){
        const Question = this.state.questionSet1.position + 1;
        this.setState({
            questionSet1:this.props.questionStore.questionSet1[Question],
            /*
            * Aziz: you can't use this.state inside this.setState
            * Do the calculation outside setState.
            */
            countA: this.state.countA + 1

        })
    }

    nextButtonB(){
        const Question = this.state.questionSet1.position + 1;
        this.setState({
            questionSet1:this.props.questionStore.questionSet1[Question],
            countB: this.state.countB + 1

        })
    }


    backButton(){
        /* Aziz: don't commit dead code */
        // const count = this.state.countA + this.state.countB ??
        const Question = this.state.questionSet1.position - 1;
        this.setState({
            questionSet1:this.props.questionStore.questionSet1[Question],
            // count: this.state.count - 1
        })
    }

    // how to redirect to home page if position < 0
    /* Aziz: how about conditionally rendering a <Redirect /> component? */
    
    //  if she choose all B  we decreasing one A all the time when back .. must modify the function .. must be if a is choosen deacrease a
    // ... this.state.position < 0 ? redirect to home page  ???
    // ... this.state.count === 0 ? this.state.count: stopfunction  ???


    render()
   {
    return (
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
        <ImageBackground  source={require('../images/bkgrnd.gif')}
          style={styles.quarterHeight}>
                <View style={styles.quarterHeight}>
                    <View style={styles.buttonContainer}>
                    <TouchableHighlight>
                        <Button rounded  style={styles.button}
                            onPress={()=>this.nextButtonA()}>
                            <Text> {this.state.questionSet1.a.name}</Text>
                            <Text>{this.state.countA}</Text>
                        </Button>
                    </TouchableHighlight>
                    </View>
                    <View style={styles.buttonContainer}>
                          <Button rounded style={styles.button}
                          onPress={()=>this.nextButtonB()}>
                            <Text> {this.state.questionSet1.b.name}</Text>
                            <Text>{this.state.countB}</Text>
                            </Button>
                    </View>

              </View>
              </ImageBackground>
<View style={styles.threeQuarterHeight}>
            <ScrollView >
            <Image source={this.state.questionSet1.a.image}/>
          <Image source={require('../images/frontPage.png')}
          style={{height: 200, width: null, flex: 9}}/>
          </ScrollView>
          </View>
</Content>

        </Container>


    );
  }
}
const styles = StyleSheet.create({
  goButton:{
    position: 'relative',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eea2ad',
    left:200,
    margin: 20
  },
  container: {
   top:10,
   justifyContent: 'center',
  },

  buttonContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',

    margin: 20


  },
  quarterHeight: {
    flex: .25,
  },
  threeQuarterHeight: {
    flex: .75,
  },
  button: {
    width:100,
    justifyContent: 'center',
  }
});
