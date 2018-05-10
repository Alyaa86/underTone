import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Content, Button, Left, Body, Right, Icon, Drawer, View} from 'native-base';
import { Footer, FooterTab } from 'native-base';
import { Link } from 'react-router-native'
import { Col, Row } from 'react-native-easy-grid';
import Q1 from './Q1.js';
import questionStore from '../stores/questionsStore';
import FadeInView from './FadeIn.js';






export default class App extends React.Component {
  constructor(props){
    super(props);
        this.satate= {
            questionSet: {}
        }
    }
   componentDidMount(){
    this.setState({questionSet: questionStore})
   }

  render() {
    
    return (
        <ImageBackground  source={require('../images/bkgrnd.gif')} 
                            style={{
                              flex: 1,
                              alignSelf: 'stretch',
                              width: undefined,
                              height: undefined
                             }}>
            <Container style={styles.container}>
              <Header style={styles.header}>
                <Body >
                  <Text>UNDERTONE APP</Text>
                </Body>
              </Header>

            <Content >
            <FadeInView>
              <View style = {{top:100, flex:1}}>
              <Row>
              <Col>
                <Text style={styles.bigWhite}>INSTRUCTIONS</Text>
                <Text style={styles.smallWhite}>1️⃣ Compare each set of pictures to your hand. </Text>
                <Text style={styles.smallWhite}>2️⃣ Choose the button corresponding to the picture you choose.</Text>
                <Text style={styles.smallWhite}>3️⃣ Scroll horizontally 👈🏻 👉🏻</Text>
                </Col>
                </Row>
                <Link component={Button} rounded style={styles.goButton} to='/Q1' 
                      onPress={() => alert("Adjust Your Screen Brightness to Medium .. ThankYou ❤️")}>
                  <Icon name='ios-thumbs-up' style={styles.WhiteFont}/>
                  <Text style={styles.WhiteFont}>GO</Text>
                </Link>
              </View>
              </FadeInView>
            </Content>  
          
              <Footer style={styles.footer}>
                <FooterTab>
                  <Button>
                    <Text> CopyRights to Reem and Alyaa © </Text>
                  </Button>
                </FooterTab>
              </Footer>
          </Container>
        </ImageBackground>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: null,
  },
  Content: {
    top: 75,
    marginLeft: 0,
    alignSelf: "center"
  },
  bigWhite: { 
    flex:1,
    margin: 10,
    top:-30,
    color: '#c4b9c7',
    fontWeight: 'bold',
    fontSize: 45,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallWhite: { 
    margin: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'stretch'
  },
  WhiteFont: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  goButton:{
    position: 'absolute',
    bottom:-100, 
    width: 200,
    height:70,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eea2ad'
  },

  header:{
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',

  },
  footer:{
    top:25,
    paddingBottom:25,
    backgroundColor: '#c4b9c7'
  },

});