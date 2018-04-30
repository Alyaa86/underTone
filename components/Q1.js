import React from 'react';
import { ImageBackground, StyleSheet, Text, View,  } from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class Q1 extends Component {
    constructor(props){
        super(props);
        this.satate= {
            img : this.props.frontPage.png
        }
    }

    render()
   {
    return (
        <List>
                
            <Tabs initialPage={0} onChangeTab={({ i, ref, from })=> this.setState({img: i})}>
                <Tab Image source={require('../images/bkgrnd.gif')/>
                <Tab Image source={require('../images/frontPage.png')}/>
            </Tabs>
            <ListItem >
                <Body >
                  <Text style={styles.middleText}>Choose Option</Text>
                </Body>
            </ListItem>
            <Tabs initialPage={0} onChangeTab={({ i, ref, from })=> this.setState({option: i})}>
                <Tab heading="Small"/>
                <Tab heading="Large"/>
            </Tabs>
            <Button full danger onPress= {()=>this.myfunc()}>
                <Text >Add</Text>
            </Button>
        </List>
    );
  }
}
}
