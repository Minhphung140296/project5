import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class MenuButton extends React.Component {
    render(){
        return(
            <Ionicons
                name="md-menu"
                size={26}
                style={styles.MenuIcon}
                color="#000000"
            />
        );
    }
}
const styles = StyleSheet.create({
    MenuIcon:{
        zIndex:9,
        position:'absolute',
        top:40,
        left:30
    }
})