import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles'

import GradientImage from '../GradientImage'

export default class RowContainer extends Component {

	render(){
		return(
			<View style={{flexDirection:'row', flex:1, height:200, backgroundColor:'blue'}}>
		 	    <GradientImage color='197,77,87' height={230}/>
    			<GradientImage color='197,77,87' height={230}/>
			</View>
		)
	}
}