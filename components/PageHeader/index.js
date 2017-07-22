import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles'

export default class PageHeader extends Component {

	render(){
		return(
			<View style={globalStyles.center}>
				<Image source={require('../../images/logo.png')} style={styles.logo}/>
        		{this.props.header && 
        			<Text style={styles.header}>{this.props.header}</Text>
        		}
			</View>
		)
	}
}