import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem, Container, Button, Icon, Header, Left, Right, Body, Content } from 'native-base'

export default class MySideBar extends React.Component {
render() {
    return (
        
        <Container style={styles.container}>
        <Content>
        <Header style={styles.header}>
         
          <Left>
            <Button transparent  onPress={() => this.props.closeDrawer()}>
              <Icon name="menu"/>
            </Button>
          </Left>
          <Body style={styles.BodyText}>
            <Text>Your Results</Text>
          </Body>
            
        </Header>
        <List>
            <ListItem itemDivider> <Text>Result 1</Text> </ListItem>
            <ListItem itemDivider> <Text>Result 1</Text> </ListItem>
            <ListItem itemDivider> <Text>Result 1</Text> </ListItem>
            <ListItem itemDivider> <Text>Result 1</Text> </ListItem>
        </List>
        </Content>
        
        

</Container>

// later change it to listView and make a function that lists the results
        )
    }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: null,
  },
  header:{
    height: 80,
  },
  BodyText:{
    flex:1,
    left:-70
  }
});