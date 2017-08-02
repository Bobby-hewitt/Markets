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
import DetailsContainer from '../DetailsContainer'

export default class MarketInfo extends Component {

	constructor(props){
		super(props)
		this.offset = 15
		this.duration = 500
		this.state={
			activeX: 0,
			scrollViewOpacity: new Animated.Value(0),
			buttonOpacity: new Animated.Value(0),
			containerOpacity: new Animated.Value(0),
			containerPosition: new Animated.Value(this.offset),
			showMap: false,
			transitionTo: null,
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

	componentDidMount(){

		Animated.parallel([
			Animated.timing(
				this.state.containerOpacity,
			    {toValue: 1,
				delay:250,
			    duration: this.duration,
			    }
			),
			Animated.timing(
				this.state.containerPosition,
			    {toValue: 0,
				delay:250,
			    duration: this.duration,
			    easing: Easing.elastic(Easing.easeInOut)
			    }
			),
			Animated.timing(
				this.state.scrollViewOpacity,
			    {toValue: 1,
			    delay:500,
			    duration: this.duration,
			    easing: Easing.easeInOut}
			),
			Animated.timing(
				this.state.buttonOpacity,
			    {toValue: 1,
			    delay:700,
			    duration: this.duration,
			    easing: Easing.elastic(Easing.easeInOut)}
			),

		]).start()
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

	swiperTouchDetected(){
		// Animated.timing(
		// 	this.state.scrollViewOpacity,
		//     {toValue: 0,
		//     duration: this.duration /3,
		//     easing: Easing.easeInOut}
		// ).start()
	}
	swiperTouchReleasedWithoutChange(){
		// Animated.timing(
		// 	this.state.scrollViewOpacity,
		//     {toValue: 1,
		//     duration: this.duration /3,
		//     easing: Easing.easeInOut}
		// ).start()
	}
	toggleMap(){
		this.setState({showMap: !this.state.showMap})
	}

	onSwipeUp(){

	}

	onSwipeDown(){

	}

	onPress(){

	}

	selectItem(){
		this.props.setstate({page:'traderInfo'})
		 if (this.props.page === 'marketInfo'){

		 	this.props.setstate({page:'traderInfo'})
	        Animated.timing(
	          this.state.containerPosition,
	            {toValue:-190 ,
	            duration: this.duration ,
	            easing: Easing.elastic(Easing.easeInOut)}
	        , {useNativeDriver: true}).start()     
	    } else {
	    	this.setState({transitionTo: 'marketInfo'})
	        Animated.timing(
	          this.state.containerPosition,
	            {toValue:0 ,
	            duration: this.duration ,
	            easing: Easing.elastic(Easing.easeInOut)}
	        , {useNativeDriver: true}).start( () => {
	        	this.props.setstate({page:'marketInfo'})

	        })     
	    }
	}



	render(){
		return(
			<View>
			<Animated.View style={[styles.container, {opacity: this.state.containerOpacity, top: this.state.containerPosition}]}>
				
					<Swiper
						isActive={this.props.page === 'marketInfo'}
			            onSwipeUp={this.onSwipeUp}
			            onSwipeUp={this.onSwipeDown}
			            onPress={this.onPress}
			            selectItem={this.selectItem.bind(this)}
						getActiveValue={this.getActiveValue.bind(this)}
						touchDetected={this.swiperTouchDetected.bind(this)}
						touchReleasedWithoutChange={this.swiperTouchReleasedWithoutChange.bind(this)}
					 	page={this.state.page}
			            duration={this.duration /2}
			            cardWidth={200}
			            swipeThreshold={80} >
					  	{this.state.traders.map((trader, i) =>{
                			return(
                  				<TraderCard key={i} image={trader.image} color={this.state.colors[i] + ','} fName={trader.fName} sName={trader.sName} />
	                		)
	              		})}
					</Swiper>
				
				</Animated.View>
				<DetailsContainer
					transitionTo={this.state.transitionTo}
					image={this.state.traders[this.state.activeX].image}
					isActive={this.props.page === 'traderInfo'} 
					traders={this.state.traders}
					activeX={this.state.activeX}/>
				</View>
				


				
			
			
		)
	}
}