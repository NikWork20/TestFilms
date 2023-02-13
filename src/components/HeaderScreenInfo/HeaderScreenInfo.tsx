import React, {useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {getStyle} from './HeaderScreenInfo.style';

import type {IHeaderScreenInfo} from '@src/constants/Interface';
import type {NativeStackNavigation} from '@src/constants/types';

const HeaderScreenInfo = ({image}: IHeaderScreenInfo): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigation>();
  const [isLoad, setIsLoad] = useState(false);
  const styles = useMemo(() => getStyle(), []);
  const platform = Platform.OS;
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={
            platform === 'ios'
              ? {...styles.touchableBack, marginLeft: 10}
              : styles.touchableBack
          }
          onPress={() => navigation.goBack()}>
          <Image
            source={require('@assets/icons/btnBack.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Image
            source={require('@assets/icons/userBlack.png')}
            resizeMode="cover"
            style={styles.imageProfile}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        imageStyle={{borderRadius: 50}}
        style={isLoad ? styles.imageBack : styles.imageOpacity}
        onLoad={() => setIsLoad(true)}
      />
      {!isLoad && (
        <View style={styles.indicator}>
          <ActivityIndicator size={'large'} color="orange" />
        </View>
      )}
    </View>
  );
};

export default HeaderScreenInfo;
