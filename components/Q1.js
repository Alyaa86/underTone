import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Alert } from 'react-native';

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
        const nextQuestion = this.state.questionSet1.position;
        this.setState({questionSet1:this.props.questionStore.questionSet1[nextQuestion]})
    }

    _onPressButton() {
    Alert.alert('You tapped the button!')
  }


    render()
   {
    return (
        <Container style={styles.container}>
        <Header >
          <Left>
            <Button transparent>
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
                        <Button rounded style={styles.button}
                            onPress={this._onPressButton}
                            title="Press Me">
                            <Text> {this.state.questionSet1.a.name}</Text>
                        </Button>
                    </View>
                    <View style={styles.buttonContainer}>
                          <Button rounded style={styles.button}
                            onPress={this._onPressButton}
                            title="Press Me"
                            color="#841584">
                            <Text> {this.state.questionSet1.b.name}</Text>
                            </Button>
                    </View>
                    <Button rounded style={styles.goButton} onPress= {()=>this.nextButton()}> 
                        <Text>Next</Text> 
                    </Button>
              </View>
              </ImageBackground>
<View style={styles.threeQuarterHeight}>
            <ScrollView >
            <Image source={require('../images/frontPage.png')} 
          style={{height: 300, width: null, }}/>
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
    top:20

    
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

