import React, {useMemo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {DrawerItem} from '@react-navigation/drawer';

import {getStyle} from './HeaderHome.style';

import type {Navigation} from '@src/constants/types';

const burger = require('@assets/icons/burger.png');
const userIcon = require('@assets/icons/user.png');

const HeaderHome = ({navigation}: Navigation): JSX.Element => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.containerDrawer}>
        <DrawerItem
          label={''}
          style={styles.imageBurger}
          onPress={() => navigation.openDrawer()}
          icon={({}) => <Image source={burger} resizeMode="cover" />}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={userIcon} resizeMode="cover" style={styles.imageUser} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHome;
