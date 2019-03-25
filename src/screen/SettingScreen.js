import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default class SettingScreen extends React.Component {
  render(){
    return(
      <View style={styles.Container}>
          <Text style ={styles.text}>SettingScreen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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