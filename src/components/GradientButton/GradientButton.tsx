import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {getStyle} from './GradientButton.style';

import type {IGradient} from '@src/constants/Interface';

const GradientButton = ({onPress}: IGradient) => {
  const styles = useMemo(() => getStyle(), []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF2CF7', '#FB047B', '#130EFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <TouchableOpacity style={styles.press} onPress={onPress}>
          <Text style={styles.title}>Show more</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default GradientButton;
