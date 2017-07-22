import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  PanResponder,
  Dimensions,
  Easing,
  Animated,
  TouchableHighlight
} from 'react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import SwipeCard from '../SwipeCard'
import Test from '../Test'


export default class SwiperContainer extends Component {

	
	constructor(props){
		super(props)
		this.minimumScale = 0.7
		this.minimumOpacity = 0.9		
		this.overlap = -100
		this.margin = 15
		this.duration = 100
		this.state ={
			animationComplete: true,
			opacityToFade: new Animated.Value(1),
			opacityToAppearLeft: new Animated.Value(this.minimumOpacity),
			opacityToAppearRight: new Animated.Value(this.minimumOpacity),
			containerOffset: new Animated.Value(this.margin),
			scaleToGrowLeft: new Animated.Value(this.minimumScale),
			scaleToGrowRight: new Animated.Value(this.minimumScale),
			scaleToShrink: new Animated.Value(1),
			cards: [],
			colors: [
				'#eb2134', '#ebebeb','#eb2133','#ebebeb','#eb2134','#ebebeb'
			],
			activeX: 0,
		}
		
		this.cardWidth = Dimensions.get('window').width - this.margin * 2
		this.swipeThreshold = 100
	}



	componentWillMount(){
		let cards = []
		React.Children.map(this.props.children, ((child) => {
			let temp = React.cloneElement(child)
			cards.push(temp)
		}))
		console.log(cards)
		this.setState({cards:cards})


		this.state.containerOffset.addListener(({value}) => this._value = value);
		this.state.scaleToShrink.addListener(({value}) => this._value = value);

		console.log('in will mount')
		 this._panResponder = PanResponder.create({
	      // Ask to be the responder:
	      onStartShouldSetPanResponder: (evt, gestureState) => true,
	      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
	      onMoveShouldSetPanResponder: (evt, gestureState) => true,
	      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

	      onPanResponderGrant: (evt, gestureState) => {

	        // The gesture has started. Show visual feedback so the user knows
	        // what is happening!
	        // gestureState.d{x,y} will be set to zero now
	      },
	      onPanResponderMove: (evt, gestureState) => {



	      		let dx = gestureState.dx



	      		console.log(gestureState.vx)



				if (gestureState.dx > this.swipeThreshold && ((this.state.activeX > 0) || (this.state.activeX > 1 && !animationComplete))){
					if (!this.state.swipeRegistered){
						this.setState({swipeRegistered: true, swipeDirection: 'right', animationComplete: false})
						
						this.swipeRight()	
					}
				} 

				else if (gestureState.dx  < this.swipeThreshold * -1 && this.state.activeX < this.state.cards.length-1){
					if (!this.state.swipeRegistered){
						this.setState({swipeRegistered: true, swipeDirection: 'left', animationComplete: false})
						
						this.swipeLeft()	
					}
				} else {
					let valToSet = dx / 800
					if (this.state.activeX !== 0 || this.state.activeX !== this.state.cards.length-1){
						this.state.containerOffset.setValue(this.state.containerOffset._value + (dx / 80))
					}
					if (dx > 0){
						console.log('greater than 0')
						this.state.opacityToAppearLeft.setValue(this.minimumOpacity+valToSet)
						this.state.scaleToGrowLeft.setValue(this.minimumScale+valToSet)

						this.state.opacityToFade.setValue(1-valToSet)
						this.state.scaleToShrink.setValue(1-valToSet)
					} else {
						this.state.scaleToGrowRight.setValue(this.minimumScale+valToSet*-1)
						this.state.opacityToFade.setValue(this.minimumOpacity+valToSet*-1)
	
						this.state.opacityToAppearRight.setValue(1-valToSet*-1)
						this.state.scaleToShrink.setValue(1-valToSet*-1)
					}
				}


				
	        // The most recent move distance is gestureState.move{X,Y}

	        // The accumulated gesture distance since becoming responder is
	        // gestureState.d{x,y}
	      },
	      onPanResponderTerminationRequest: (evt, gestureState) => true,
	      onPanResponderRelease: (evt, gestureState) => {
	      	this.setState({swipeRegistered: false})
	      	if (this.state.animationComplete){
	      		Animated.parallel([
				Animated.timing(
					this.state.containerOffset,
					    {toValue:  -1* (this.state.activeX * (this.cardWidth + this.overlap) - this.margin) ,
					    duration: this.duration,
					    easing: Easing.easeInOut
					    }
					),				
					Animated.timing(
					    this.state.scaleToGrowLeft,
					    {toValue: this.minimumScale,
					   duration: this.duration,
						easing: Easing.easeInOut}
					),
					Animated.timing(
					    this.state.scaleToShrink,
					    {toValue: 1,
					   duration: this.duration,
						easing: Easing.easeInOut}
					),
					Animated.timing(
					    this.state.opacityToAppearLeft,
					    {toValue: this.minimumOpacity,
					   duration: this.duration,
						easing: Easing.easeInOut}
					),
					Animated.timing(
					    this.state.opacityToFade,
					    {toValue: 1,
					   duration: this.duration,
						easing: Easing.easeInOut}
					),
					Animated.timing(
			    this.state.scaleToGrowRight,
			    {toValue: this.minimumScale,
			    duration: this.duration,
				easing: Easing.easeInOut}
			),			Animated.timing(
			    this.state.opacityToAppearRight,
			    {toValue: this.minimumOpacity,
			    duration: this.duration,
				easing: Easing.easeInOut}
			)
			], { useNativeDriver: true }).start((completed) => {
				
			})
	      			
	      	}
	        // The user has released all touches while this view is the
	        // responder. This typically means a gesture has succeeded
	      },
	      onPanResponderTerminate: (evt, gestureState) => {

	        // Another component has become the responder, so this gesture
	        // should be cancelled
	      },
	      onShouldBlockNativeResponder: (evt, gestureState) => {
	        // Returns whether this component should block native components from becoming the JS
	        // responder. Returns true by default. Is currently only supported on android.
	        return true;
	      },
	    });
	  
	}
	swipeLeft(){
		console.log('swiping')
				Animated.parallel([
			Animated.timing(
			    this.state.containerOffset,
			    {toValue: this.state.containerOffset._value - (this.cardWidth + this.overlap),
			    duration: this.duration,
				easing: Easing.easeInOut}
			),			
			Animated.timing(
			    this.state.scaleToGrowRight,
			    {toValue: 1,
			    duration: this.duration,
				easing: Easing.easeInOut}
			),
			Animated.timing(
			    this.state.opacityToAppearRight,
			    {toValue: 1,
			    duration: this.duration,
				easing: Easing.easeInOut}
			),
			Animated.timing(
			    this.state.opacityToFade,
			    {toValue: this.minimumOpacity,
			    duration: this.duration,
				easing: Easing.easeInOut}
			),
			Animated.timing(
			    this.state.scaleToShrink,
			    {toValue: this.minimumScale,
			    duration: this.duration,
				easing: Easing.easeInOut}
			)
		], { useNativeDriver: true }).start((completed) => {
			console.log('in complete callback', completed)
			this.setState({activeX: this.state.activeX + 1, animationComplete: true}, () => {
				this.state.containerOffset.setValue( -1* (this.state.activeX * (this.cardWidth + this.overlap) - this.margin)  )
			})
			this.state.opacityToFade.setValue(1)
			this.state.opacityToAppearRight.setValue(this.minimumOpacity)
			this.state.scaleToGrowRight.setValue(this.minimumScale)
			this.state.scaleToShrink.setValue(1)
		})
		
	}

	swipeRight(){
		console.log('swiping')
		Animated.parallel([
			Animated.timing(
			    this.state.containerOffset,
			    {toValue: this.state.containerOffset._value + (this.cardWidth + this.overlap),
			    duration: this.duration,
			    easing: Easing.easeInOut
			    }
			),				
			Animated.timing(
			    this.state.scaleToGrowLeft,
			    {toValue: 1,
			   duration: this.duration,
				easing: Easing.easeInOut}
			),
			Animated.timing(
			    this.state.scaleToShrink,
			    {toValue: this.minimumScale,
			   duration: this.duration,
				easing: Easing.easeInOut}
			),
			Animated.timing(
			    this.state.opacityToAppearLeft,
			    {toValue: 1,
			   duration: this.duration,
				easing: Easing.easeInOut}
			),
			Animated.timing(
			    this.state.opacityToFade,
			    {toValue: this.minimumOpacity,
			   duration: this.duration,
				easing: Easing.easeInOut}
			),
		], { useNativeDriver: true }).start((completed) => {
			let activeToAdd = this.state.activeX >0 ? -1 : 0
			this.setState({activeX: this.state.activeX + activeToAdd, animationComplete: true}, () => {
				this.state.containerOffset.setValue( -1* (this.state.activeX * (this.cardWidth + this.overlap) - this.margin)  )
			})
			this.state.opacityToFade.setValue(1)
			this.state.opacityToAppearLeft.setValue(this.minimumOpacity)
			this.state.scaleToGrowLeft.setValue(this.minimumScale)
			this.state.scaleToShrink.setValue(1)
		})
	}


	render(){
		return(
			<Animated.View style={[styles.container, {marginLeft: this.state.containerOffset}]} {...this._panResponder.panHandlers}>
				{this.state.cards.map((card, i) => {
						if (this.state.activeX === i){
							return (
								<Animated.View key={i} style={[styles.card, {marginRight: this.overlap,zIndex: 3,width:this.cardWidth, opacity: this.state.opacityToFade,backgroundColor: 'blue',transform: [{scale: this.state.scaleToShrink}]}]} >
									{card}
								</Animated.View>
							)			

						} else if (i === this.state.activeX + 1){
							return (
								<Animated.View key={i} style={[styles.card, {marginRight: this.overlap,zIndex: 2,width:this.cardWidth, opacity: this.state.opacityToAppearRight, transform: [{scale: this.state.scaleToGrowRight}]}]} >
									{card}
								</Animated.View>
							)			
						} else if (i === this.state.activeX - 1){
							return (
								<Animated.View key={i} style={[styles.card, {marginRight: this.overlap,zIndex: 2,width:this.cardWidth, opacity: this.state.opacityToAppearLeft, transform: [{scale: this.state.scaleToGrowLeft}]}]} >
									{card}
								</Animated.View>
							)			
						} else {
							return (
								<Animated.View key={i} style={[styles.card, {marginRight: this.overlap,zIndex: 1,width:this.cardWidth, opacity:this.minimumOpacity, transform: [{scale: this.minimumScale}]}]} >
									{card}
								</Animated.View>
							)		
						}
				})}
			</Animated.View>
		)
	}
}