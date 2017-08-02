import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default styles = StyleSheet.create({



  image:{

    resizeMode: 'cover', 
    height:150,
    marginTop:80, 
    width:Dimensions.get('window').width -30,
    paddingLeft:15,
    borderRadius:10,
  },
  imagePlaceholder:{
    height:150,
    marginTop:80, 
    width:Dimensions.get('window').width -30,
    marginLeft:15,
    borderRadius:10,
  },
  title:{
    marginTop:15,
    color: 'white',
    fontSize:20,
    backgroundColor:'transparent',
    paddingLeft:15,
  },
  description:{
    paddingBottom:15,
    paddingTop:15,
    paddingLeft:15,
    color: 'white',
    fontSize:14,
    backgroundColor:'transparent',
    width:Dimensions.get('window').width -30,
  },
  productsContainer:{
    marginBottom:15,
    flexDirection:'row',
    flex:1,
    width:Dimensions.get('window').width-30,
    marginLeft:15,
  }
 
});