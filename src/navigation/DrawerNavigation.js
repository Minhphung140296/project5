import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import HomeScreen from '../screen/HomeScreen';
import linkScreen from '../screen/LinkScreen';
import SettingScreen from '../screen/SettingScreen'
const WIDTH = Dimensions.get("window").width;
const DrawerCofig = {
    drawerWidth: WIDTH * 0.83,
}
const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        link: {
            screen: linkScreen
        },
        Setting: {
            screen: SettingScreen
        }
    },
    DrawerCofig
);
export default createAppContainer(DrawerNavigator);