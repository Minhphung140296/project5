import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import DrawerNavigation from './src/navigation/DrawerNavigation'
export default class App extends React.Component{
  render(){
    return(
      <View style={styles.Container}>
          <DrawerNavigation />
      </View>
    );
  }
}
const styles=StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#fff'
  },

})