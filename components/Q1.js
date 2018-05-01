import React from 'react';
import { ImageBackground, StyleSheet, Text, View,  } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView, Image} from 'react-native';

export default class Q1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            questionSet1: this.props.questionStore.questionSet1[0]
        }
    }


    nextButton(){
        const nextQuestion = this.state.questionSet1.nextQuestion;
        this.setState({questionSet1:this.props.questionStore.questionSet1[nextQuestion]})
    }


    render()
   {
    return (
        <Container>
        <Content>
        <Text> {this.state.questionSet1.a.name} {this.state.questionSet1.b.name}
              </Text>
        
                <Button rounded style={styles.goButton} onPress= {()=>this.nextButton()}> Next </Button>
                </Content>
        </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
    ...StyleSheet.absoluteFillObject,
    top: null,
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
  }
});
