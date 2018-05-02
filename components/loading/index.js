import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Spinner} from 'native-base';
import giphy.gif from '../loading';

export default class Loading extends React.Component {
		render() {

				return (
						<View style={styles.container}>
						 <Image  source={require('../images/bkgrnd.gif')} 
          style={{height: 700, width: null, flex: 9}}/>
								<Text style={styles.text}> Loading... </Text>
								<Spinner color='white' />
						</View>
				);
		}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5cd6d6',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
			fontSize: 60,
			color: 'white',
			fontFamily: 'Roboto_medium',
	}
});