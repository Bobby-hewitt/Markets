import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
import globalStyles from '../../styles/globalStyles'

export default class GradientImage extends Component {

	render(){
		return(
			<View style={{flex:1}}>
			 	<Image source={{url: 'https://brixtonmarket.net/wordpress/wp-content/uploads/2013/05/traders-3.jpg'}}style={[styles.image, {height: this.props.height}]} />
			 	<LinearGradient colors={['rgba(' + this.props.color + ',0)','rgba(' + this.props.color + ',0.3)', 'rgba(' + this.props.color + ',1)', 'rgba(' + this.props.color + ',1)']} style={[styles.container, {height: this.props.height}]} />
			</View>
		)
	}
}