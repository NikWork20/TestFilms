import React from 'react';
import {View} from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {configDrawer} from '@src/constants/configDrawer';

const CustomDrawer = ({state, navigation}: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...state}
        contentContainerStyle={{backgroundColor: 'none'}}>
        <DrawerItem
          label="HOME"
          onPress={() => navigation.navigate('HOME')}
          inactiveBackgroundColor="#A50100"
          labelStyle={configDrawer.labelStyle}
        />
        <DrawerItem
          label="SIGN IN"
          onPress={() => navigation.navigate('SIGN IN')}
          labelStyle={configDrawer.labelStyle}
        />
        <DrawerItem
          label="SIGN UP"
          onPress={() => navigation.navigate('SIGN UP')}
          labelStyle={configDrawer.labelStyle}
        />
        <DrawerItem
          label="MOVIES"
          onPress={() => navigation.navigate('MOVIES')}
          labelStyle={configDrawer.labelStyle}
        />
        <DrawerItem
          label="SERIES"
          onPress={() => navigation.navigate('SERIES')}
          labelStyle={configDrawer.labelStyle}
        />
        <DrawerItem
          label="GENRES"
          onPress={() => navigation.navigate('GENRES')}
          labelStyle={configDrawer.labelStyle}
        />
        <DrawerItem
          label="ABOUT"
          onPress={() => navigation.navigate('ABOUT')}
          labelStyle={configDrawer.labelStyle}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
