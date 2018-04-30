import React from 'react';
import { ImageBackground, StyleSheet, Text, View,  } from 'react-native';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title , List, Tab, Tabs} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class App extends React.Component {
  constructor(props){
    super(props);
        this.satate= {
            img : ''
        }
    }
  render() {
    return (
      <ImageBackground  source={require('../images/bkgrnd.gif')} 
          style={{height: 700, width: null, flex: 9}}>
      <Container style={styles.container}>
        <Header>
          <Left/>
          <Body>
            <Title>UNDERTONE</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.Content}>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left >
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem >
              <ScrollView>
              <Image  source={require('../images/bkgrnd.gif')} 
          style={{height: 700, width: null, flex: 9}}/>
            <Image  source={require('../images/frontPage.png')} 
          style={{height: 700, width: null, flex: 9}}/>
          </ScrollView>
            </CardItem>
             <CardItem>
              <Right>
                <Button FULL transparent textStyle={{color: '#87838B'}}>
                  <Text>START YOUR TEST NOW</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
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
  divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
  Content: {
    top: 30
  }
});