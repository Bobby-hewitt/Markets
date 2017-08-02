import React, { Component } from 'react';
import {
  Text,
  Image,
  ScrollView,
  Animated, 
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import MapView from 'react-native-maps';
import Swiper from '../TraderSwiperContainer'
import SwipeCard from '../SwipeCard'
import TraderCard from '../TraderCard'
import ProductCard from '../ProductCard'

export default class DetailsContainer extends Component {

	constructor(props){
		super(props)
		this.offset = 15
		this.duration = 500
		this.state={
			activeX: 0,
			imageOpacity: new Animated.Value(0),
			textOpacity: new Animated.Value(0),
			productsOpacity: new Animated.Value(0),
			imagePosition: new Animated.Value(this.offset + 15),
			textPosition: new Animated.Value(this.offset),
			productsPosition: new Animated.Value(this.offset),
			showMap: false,
			colors: ['255,158,99', '85,68,204', '151,170,187','110,111,113', '70,88,105', '255,97,85'],
			traders: [
        {
          fName: 'Frank',
          sName: 'Sniffles',
          image: require('../../images/trader1.jpg'),
          description: 'Frank... Lots of Lorem about market traders. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
          title: 'Stone vases'

        },
        {
          fName: 'Gana',
          sName: 'DooWan',
          image: require('../../images/trader2.jpg'),
          description: 'Gana... Lots of Lorem about market traders. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
          title: 'Stone vases'
        },
        {
          fName: 'Lassa',
          sName: 'Knuwn',
          image: require('../../images/trader3.jpg'),
          description: 'Lassa... Lots of Lorem about market traders. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
          title: 'Stone vases'
        },
        {
          fName: 'Kwabi',
          sName: 'Koto',
          image: require('../../images/trader4.jpeg'),
          description: 'Kwabi... Lots of Lorem about market traders. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
          title: 'Stone vases'
        },
        {
          fName: 'Don',
          sName: 'Jally',
          image:  require('../../images/trader5.jpeg'),
          description: 'Don... Lots of Lorem about market traders. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
          title: 'Stone vases'
        },
      ],
		}
	}

	

	getActiveValue(index){
		if (index !== this.state.activeX){
				this.setState({activeX: index}, () => {
					// Animated.timing(
					// 	this.state.scrollViewOpacity,
					//     {toValue: 1,
					//     duration: this.duration /3,
					//     easing: Easing.easeInOut}
					// ).start()
				})
			
		}
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.transitionTo === 'marketInfo' && this.props.transitionTo !== 'marketInfo'){
			Animated.timing(
				this.state.imageOpacity,
			    {toValue: 0,
			    duration: this.duration /2,
			    easing: Easing.elastic(Easing.easeInOut)}
			).start()
		}

		if (nextProps.isActive){

			Animated.sequence([
				Animated.parallel([
					Animated.timing(
						this.state.imageOpacity,
					    {toValue: 1,
					    delay:300,
					    duration: this.duration /2,
					    easing: Easing.elastic(Easing.easeInOut)}
					),
					Animated.timing(
						this.state.imagePosition,
					    {toValue: 15,
					    delay:300,
					    duration: this.duration /2,
					    easing: Easing.elastic(Easing.easeInOut)}
					),
				]),
				Animated.parallel([
					Animated.timing(
						this.state.textOpacity,
					    {toValue: 1,
					    delay:100,
					    duration: this.duration /2,
					    easing: Easing.elastic(Easing.easeInOut)}
					),
					Animated.timing(
						this.state.textPosition,
					    {toValue: 0,
					    delay:100,
					    duration: this.duration /2,
					    easing: Easing.elastic(Easing.easeInOut)}
					),
				]),
				Animated.parallel([
					Animated.timing(
						this.state.productsOpacity,
					    {toValue: 1,
					    delay:100,
					    duration: this.duration /2,
					    easing: Easing.elastic(Easing.easeInOut)}
					),
					Animated.timing(
						this.state.productsPosition,
					    {toValue: 0,
					    delay:100,
					    duration: this.duration /2,
					    easing: Easing.elastic(Easing.easeInOut)}
					),
				])
			]).start(() => {
				this.setState({showProducts: true})
			})
	}

		
	}




	render(){
		return(
			

				<Animated.ScrollView style={{opacity: this.state.scrollViewOpacity, zIndex:-2}}>
					
					
					{this.props.isActive ? <Animated.Image source={this.props.image} style={[styles.image, {opacity:this.state.imageOpacity, marginLeft: this.state.imagePosition}]} /> : <View style={styles.imagePlaceholder} />}
					<Animated.Text style={[styles.title, {opacity: this.state.textOpacity, marginLeft:this.state.textPosition}]}>{this.props.traders[this.props.activeX].title} </Animated.Text>
					<Animated.Text style={[styles.description, {opacity: this.state.textOpacity, marginLeft:this.state.textPosition}]}>{this.props.traders[this.props.activeX].description} </Animated.Text>
					


					{this.state.showProducts &&
						<View>
						<View style={styles.productsContainer}>
							<ProductCard image={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJq6mpmxlof1VHthIcoiB1tJP_KYpLkOSKUuOPCq8aqpPKjLjuSw'}} color={this.state.colors[Math.round(Math.random()*3)] + ','}/>
							<View style={{width:15}} />
							<ProductCard image={{uri:'https://stfrancisoffice.files.wordpress.com/2015/01/craft-markets.jpg'}} color={this.state.colors[0] + ','}/>
						</View>
						<View style={styles.productsContainer}>
							<ProductCard image={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJq6mpmxlof1VHthIcoiB1tJP_KYpLkOSKUuOPCq8aqpPKjLjuSw'}} color={this.state.colors[Math.round(Math.random()*3)] + ','}/>
							<View style={{width:15}} />
							<ProductCard image={{uri:'https://stfrancisoffice.files.wordpress.com/2015/01/craft-markets.jpg'}} color={this.state.colors[0] + ','}/>
						</View>
						</View>
					}
				
					
						

				</Animated.ScrollView>

		)
	}
}