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

export default class ProductCard extends Component {



	render(){
		console.log(this.props.color)
		return(
	
			<Animated.View style={[styles.container, globalStyles.center]}>
				<Image source={this.props.image} style={styles.image}/>

				
				<LinearGradient 
					colors={['rgba(' + this.props.color +'0.0)','rgba(' + this.props.color +'1)', 'rgba(' + this.props.color +'1)']} 
					locations={[0,0.8,1]}style={styles.overlay}/>
				<Text style={styles.text}>{this.props.text}</Text>
			</Animated.View>
		
		)
	}
}