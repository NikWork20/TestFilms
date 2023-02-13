import React, {useMemo, useState} from 'react';
import {ActivityIndicator, Animated, ImageBackground, View} from 'react-native';

import {useSelector} from 'react-redux';

import BlockPopularFilms from '@src/components/BlockPopularFilms/BlockPopularFilms';
import CarouselNewFilms from '@src/components/CarouselNewFilms/CarouselNewFilms';
import HeaderHome from '@src/components/HeaderHome/HeaderHome';
import StatusBarBottom from '@src/components/StatusBar/StatusBarBottom';
import StatusBarTop from '@src/components/StatusBar/StatusBarTop';

import {getStyle} from './HomeScreen.style';

import type {Navigation, TStoreReducers} from '@src/constants/types';

const HomeScreen = ({navigation}: Navigation): JSX.Element => {
  const styles = useMemo(() => getStyle(), []);
  const newFilms = useSelector(
    (store: TStoreReducers) => store.filmsState.newFilms,
  );
  const [isLoad, setIsLoad] = useState(false);

  const image = {uri: newFilms[0]?.posterUrl};
  return (
    <View style={styles.mainContainer}>
      <StatusBarTop />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <ImageBackground
          source={image ? image : 0}
          style={isLoad ? styles.imageBack : styles.imageOpacity}
          resizeMode="cover"
          onLoad={() => setIsLoad(true)}>
          <HeaderHome navigation={navigation} />
        </ImageBackground>
        {!isLoad && (
          <View style={styles.indicator}>
            <ActivityIndicator size={'large'} color="orange" />
          </View>
        )}
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imageBlock}>
          <View style={styles.blockCarousel}>
            <CarouselNewFilms />
            <BlockPopularFilms />
          </View>
        </ImageBackground>
      </Animated.ScrollView>
      <StatusBarBottom />
    </View>
  );
};

export default HomeScreen;
