/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
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


import RowContainer from './components/RowContainer'
import PageHeader from './components/PageHeader/'
import SwiperContainer from './components/SwiperContainer'


export default class Markets extends Component {

  constructor(props){
    super(props)
    this.state = {
    
    }
  }

  videoError(){
    console.log('video error')
  }

  render() {
    return (
     
      <View>
        
        <RowContainer />
       
       
      <LinearGradient colors={['rgba(16,16,16,0.95)', 'rgba(16,16,16,0.9)']} style={styles.overlay}/>
    <PageHeader header="markets"/>

    <SwiperContainer />
      

      </View>

    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    flexDirection: 'column',
    flex:1,
    minHeight:Dimensions.get('window').height
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
  logo:{
    marginTop:50,
  },
  header:{
    marginTop:20,
    backgroundColor:'transparent',
    color: 'white',
    fontSize:30,
    fontFamily: 'bettynoir',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Markets', () => Markets);
