// import React, {Component} from 'react';
// import { Modal, Text, TouchableHighlight, View, AsyncStorage, StyleSheet, TextInput } from 'react-native';
// import { ImageBackground, Alert } from 'react-native';
// import { ScrollView, Image} from 'react-native';
// import { Button } from 'native-base';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right, Title, DeckSwiper} from 'native-base';


// import {  Link, Redirect } from 'react-router-native';
// import DummyResults from './DummyResults.js'

// export default class MyModal extends Component {
//   state = {
//     modalVisible: false,
//     myKey: null
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   async saveKey(value) {
//     try {
//       console.log(value)
//       await AsyncStorage.setItem('@MySuperStore:key', value);
//     } catch (error) {
//       console.log("Error saving data" + error);
//     }
//   }


//   render() {
//     return (
//       <Container style={styles.container}>
//       <Content>
//         <ImageBackground  source={require('../images/bkgrnd.gif')} 
//           style={styles.quarterHeight}>
//       <View style={styles.Content}>
//         <Modal
//           animationType="fade"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             alert('Modal has been closed.');
//           }}>
//           <View style={styles.quarterHeight}>
//             <View style={styles.content}>
//               <Text>Hello World!</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Enter key you want to save!"
//               value={this.state.myKey}
//               onChangeText={(value) => this.saveKey(value)}
//               />
//               <Link component={Button} round style={styles.button} onPress={() => {this.setModalVisible(!this.state.modalVisible),
//                   (value) => this.saveKey(value, data)}} to= '/DummyResults' >
                
//                 <Text>Hide Modal</Text>
//               </Link>
//               </View>
//             </View>
//         </Modal>
//         <View style={styles.content}>
//         <Button round style={styles.button}
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>
//           <Text>Show Modal</Text>
//         </Button>
//         </View>
//       </View>
//       </ImageBackground>
//                 </Content>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   goButton:{
//     flex:1,
//     position: 'relative',
//     width: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#eea2ad',
//     left:200,
//     margin: 20
//   },
//   container: {
//    flex:1,
//    justifyContent: 'center',
//   },
//   WhiteFont: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 20,
//     alignSelf: "center",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Content: {
//     flex:1,
//     margin: 100,
//     flexDirection: 'row',
//     alignSelf: "center",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   quarterHeight: {
//     flex: 1,
//     height: 700, 
//     width: 400
//   },
//   threeQuarterHeight: {
//     flex: .75,
//     height: undefined, 
//     width: undefined
    
//   },
//   button: {
//     flex:1,
//     top:15,
//     width:250,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: "center",
//     backgroundColor: '#eea2ad',
//   },
//   imageSize:{
//     flex:1, 
//     height: 335, 
//     width: 385,
//     resizeMode: Image.resizeMode.cover,
//   },
//   chooseText:{
//     flex:1,
//     top:10,
//     width:200,
//     height: 35,
//     justifyContent: 'center',
//     alignSelf: "center",
//     alignItems: 'center'
//   }
// });