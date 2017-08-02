import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default styles = StyleSheet.create({


  container:{
  	borderRadius:10,
	height:150,
  flex:1,
	overflow:'hidden',
  },
  text:{
  	fontWeight:'bold',
  	padding: 5,
  	position:'absolute',
  	bottom:5,
  	left:5,
  	fontFamily: 'bettynoir',
  	fontSize:30,
  	right:5,
  	backgroundColor:'transparent',
  	color:'#ebebeb',
  	textAlign:'center',
  	textShadowColor: 'rgba(16,16,16,0.5)',
  	textShadowOffset:{width:2, height:2},
  	textShadowRadius:2,
  },
  overlay:{
  	position:'absolute',
  	top:0,
  	left:0,
  	height:220,
  	width:Dimensions.get('window').width -30,
  },
   image:{
   	resizeMode:'cover',
  	position:'absolute',
  	top:0,
  	left:0,
  	height:220,
  	width:Dimensions.get('window').width -30,
  }
});