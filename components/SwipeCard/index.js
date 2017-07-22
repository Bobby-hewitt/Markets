import React, { Component } from 'react';
import {
  Text,
  Image,
  Animated,
  View,
} from 'react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import GradientImage from '../GradientImage'

export default class SwipeCard extends Component {



	render(){
		return(
			<Animated.View style={[styles.container, globalStyles.center,  { backgroundColor: this.props.color, width: this.props.width}]}>
				<Text>{this.props.text}</Text>
			</Animated.View>
		)
	}
}