import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default styles = StyleSheet.create({


  container:{
    width:Dimensions.get('window').width,
    height:200,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  card:{
    height:200,
  }
});