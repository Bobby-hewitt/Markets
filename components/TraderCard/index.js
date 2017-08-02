import React, { Component } from 'react';
import {
  Text,
  Image,
  Animated,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import LinearGradient from 'react-native-linear-gradient';

export default class TraderCard extends Component {

	onPress(){
		console.log('on press')
	}

	render(){
		return(
			<TouchableOpacity onPress={this.onPress}>
			<Animated.View style={[styles.container, globalStyles.center,  { backgroundColor: '#ebebeb', width: this.props.width}]}>
				<Image source={this.props.image} style={styles.image}/>

				
				<LinearGradient 
					colors={['rgba(' + this.props.color +'0.0)','rgba(' + this.props.color +'1)', 'rgba(' + this.props.color +'1)']} 
					locations={[0,0.8,1]}style={styles.overlay}/>
				<Text style={styles.text}>{this.props.fName} {this.props.sName}</Text>
			</Animated.View>
			</TouchableOpacity>
		)
	}
}