import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default class LinkScreen extends React.Component{
  render(){
    return(
      <View style={styles.Container}>
          <Text style ={styles.text}>LinkScreen</Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  text:{
    fontSize:23,
  }
})