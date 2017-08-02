/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  Image,
  View,
  ScrollView,

} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video'
import PageHeader from './components/PageHeader/'
import Swiper from './components/SwiperContainer'
import SwipeCard from './components/SwipeCard'
import MarketInfo from './components/MarketInfo'

export default class Markets extends Component {

  constructor(props){
    super(props)
    this.duration = 300
    this.state = {
      activeIndex: null,
      page: 'browseMarkets',
            colors: ['255,158,99', '85,68,204', '151,170,187','110,111,113', '70,88,105', '255,97,85'],
      markets: [
        {
          name: 'Camden Lock Market',
          image: require('./images/camdenLockMarket.jpg'),
          postcode: 'NW1 8AF ',
          description: 'Offering an eclectic jumble of street food, clothing, gifts and more, Camden Lock Market is a characterful shopping experience. The market may have started its life selling solely arts and crafts, but under a new initiative Camden Lock has been hosting an array of events, from festivals to night markets and pop up stores. Highlights of the new calendar include a Deli market and pop up yoga on Wednesdays, Out the Box street food every Thursday night and regular live comedy, ensuring that there’s sure to be something different going on each time you visit.',
          mapRegion:  {latitude: 51.541495, longitude: -0.146521, latitudeDelta: 0.005, longitudeDelta: 0.005}
        },
        {
          name: 'Borough Market',
          image: require('./images/boroughMarket.jpg'),
          postcode: 'SE1 1TL',
          description: 'The food hound’s favourite market is also London’s oldest, dating back to the 13th century. It’s the busiest too, occupying a sprawling site near London Bridge. Gourmet goodies run the gamut, from fresh loaves and rare-breed meats, via fish, game, fruit and veg, to cakes and all manner of preserves, oils and teas; head out hungry to take advantage of the numerous free samples. ',
          mapRegion:  {latitude: 51.505674, longitude: -0.090787, latitudeDelta: 0.005, longitudeDelta: 0.005}
        },
        {
          name: 'Brick Lane Market',
          image: require('./images/brickLaneMarket.jpg'),
          postcode: 'E1 6SB',
          description: 'Though Brick Lane Market is an entity (and attraction) in itself, the banner has grown to encompass a motley array of markets in and around the East End hotspot. Brick Lane Market proper is where to head for tools, household goods and bargain fruit and veg sold by the bowl. Vendors without a proper stall often line Brick Lane, their wares (dodgy old videos, broken dolls, CD players) set up on blankets. Bric-a-brac traders morph into indie clothes and accessories designers as you hit Backyard Market, housed in a warehouse building opposite Dray Walk.',
          mapRegion:  {latitude: 51.521334, longitude: -0.071837, latitudeDelta: 0.005, longitudeDelta: 0.005}
        },
        {
          name: 'Greenwich Market',
          image: require('./images/greenwichMarket.jpg'),
          postcode: ' SE10 9HZ',
          description: 'Discover London’s only historic market set within a World Heritage site. Surrounded by independent and boutique shops and a well established designer-maker trend means you are sure to find something different. Enjoy a relaxing day out with a great choice of take away food from the market and a range of gastro pubs, restaurants, cafes and wine bars within an easy stroll.',
          mapRegion:  {latitude: 51.481664, longitude: -0.009086, latitudeDelta: 0.005, longitudeDelta: 0.005}
        },
        {
          name: 'Portobello Market',
          image:  require('./images/portobelloMarket.jpg'),
          postcode: 'W11 1LJ',
          description: 'Portobello is actually several markets stretched out up one long strip of road: antiques start at the Notting Hill Gate end; further up are food stalls; and emerging designer and vintage clothes are found under the Westway flyover and along the walkway to Ladbroke Grove. A visit here is as much about soaking up the vibe as it is about shopping.',
          mapRegion:  {latitude: 51.517176, longitude:  -0.205897, latitudeDelta: 0.005, longitudeDelta: 0.005}
        },
        {
          name: 'Spitalfield Market',
          image:  require('./images/spitalfieldMarket.jpg'),
          postcode: 'E1 6AA',
          description: 'Redevelopment has seen this East End stalwart combine the refurbished 1887 covered market with a modern shopping precinct. Around the edge, enthusiastic stallholders sell grub from just about every corner of the world. Sunday is busiest; browsing options include creations by up-and-coming designers, vintage clobber, crafts, jewellery, books and sheepskin rugs.',
          mapRegion:  {latitude: 51.519911, longitude:  -0.075617, latitudeDelta: 0.005, longitudeDelta: 0.005}
        }
      ],
      swiperTop: new Animated.Value(150),
      titleOpacity: new Animated.Value(1)
  }
  }

  videoError(){
    console.log('video error')
  }

  selectItem(payload){
    if (this.state.page === 'marketInfo'){
      this.setState({page: 'browseMarkets', activeIndex: payload})
        Animated.timing(
          this.state.swiperTop,
            {toValue:150 ,
            duration: this.duration * 2,
            easing: Easing.elastic(Easing.easeInOut)}
        , {useNativeDriver: true}).start()     
    } else {
      this.setState({page: 'marketInfo', activeIndex: payload})
        Animated.timing(
          this.state.swiperTop,
            {toValue:-140 ,
            duration: this.duration * 2,
            easing: Easing.elastic(Easing.easeInOut)}
        , {useNativeDriver: true}).start()     
    }
  }

  setstate(data){
    this.setState(data)
  }



  render() {
    return (
     
      <View style={styles.container}>
       <StatusBar hidden={true} />
       {/* <Image source={require('./images/brickLaneMarket.jpg')} style={styles.imageOverlay} /> */}
        <LinearGradient colors={['rgba(16,16,16,1)', 'rgba(16,16,16,1)']} style={styles.overlay}/>
        <Animated.View style={[styles.swiperContainer, {top:this.state.swiperTop}]}>

          <Swiper
            isActive={this.state.page === 'browseMarkets'}
            onSwipeUp={this.onSwipeUp}
            onSwipeUp={this.onSwipeDown}
            onPress={this.onPress}
            selectItem={this.selectItem.bind(this)}
            duration={this.duration}
            cardWidth={Dimensions.get('window').width -30} 
            minimumOpacity={1}>
              {this.state.markets.map((market, i) =>{
                return(
                  <SwipeCard key={i} image={market.image} color={this.state.colors[i] + ','} text={market.name}/>
                )
              })}
          </Swiper>
        </Animated.View>
        {this.state.page !== 'browseMarkets' &&
      
          <View style={styles.MarketInfo}>  
            <MarketInfo 
              setstate={this.setstate.bind(this)}
              page={this.state.page}
              themeColor={this.state.colors[this.state.activeIndex]}
              title={this.state.markets[this.state.activeIndex].postcode} 
              description={this.state.markets[this.state.activeIndex].description} 
              mapRegion={this.state.markets[this.state.activeIndex].mapRegion} />
          </View>
     
        }
      </View>

    );
  }
}

const styles = StyleSheet.create({

  swiperContainer:{
    position:'absolute',
    left:0,
    zIndex:1,
  },
  imageOverlay:{
     position:'absolute',
    top:0,
    left:0,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    resizeMode:'cover',
  },
  container:{
    paddingTop:100,
  },

  overlay: {
    position:'absolute',
    top:0,
    left:0,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('Markets', () => Markets);
