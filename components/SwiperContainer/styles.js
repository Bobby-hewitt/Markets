import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default styles = StyleSheet.create({


  container:{
    width:Dimensions.get('window').width,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },

  card:{
  	shadowColor:'#ebebeb',
  	shadowOffset:{width:5, height:5},
  	shadowRadius:5,
  }

});