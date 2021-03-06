import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Content, Button, Left, Body, Right, Icon, Drawer, View} from 'native-base';
import { Footer, FooterTab } from 'native-base';
import { Link } from 'react-router-native'
import Q1 from './Q1.js';
import Instructions from './Instructions.js';
import questionStore from '../stores/questionsStore'
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
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    }
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
              <View >
                <Text style={styles.bigWhite}>READY{'\n'}TO KNOW YOUR{'\n'}UNDERTONE?</Text>
                <Link component={Button} rounded style={styles.goButton} to='/Q1' 
                      onPress={() => alert("Adjust Your Screen Brightness to Medium .. ThankYou ❤️")}>
                  <Icon name='ios-thumbs-up' style={styles.WhiteFont}/>
                  <Text style={styles.WhiteFont}>GO</Text>
                </Link>
                <Link component={Button} rounded style={styles.button} to='/Instructions'>
                  <Text style={styles.smallWhite}>If you need Instructions Press here </Text>
                </Link>
              </View>
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
    top: 50,
    color: '#c4b9c7',
    fontWeight: 'bold',
    fontSize: 50,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallWhite: { 
    color: '#030303',
    fontSize: 20,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  WhiteFont: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
  },
  goButton:{
    position: 'absolute',
    bottom:-250, 
    width: 300,
    height:100,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eea2ad'
  },
  button:{

    position: 'absolute',
    bottom:-350, 
    width: 350,
    height:50,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eea2ad'
  },

  header:{
    height: 60,
  },
  footer:{
    top:25,
    paddingBottom:25,
    backgroundColor: '#c4b9c7'
  }
});