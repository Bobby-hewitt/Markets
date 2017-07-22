import React, { Component } from 'react';
import {
  Text,
  Image,
  Animated,
  View,
} from 'react-native';
import globalStyles from '../../styles/globalStyles'

export default class Test extends Component {



	render(){
		return(
			<View style={{flex: 1, backgroundColor:'blue'}}>
				{this.props.test}
			</View>
		)
	}
}