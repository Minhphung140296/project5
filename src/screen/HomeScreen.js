import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuButton from '../Components/MenuButton'


export default class HomeScreen extends React.Component {
  render() {
    return (
      
      <View style={styles.Container}>
        <MenuButton />
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 23,
  }
})