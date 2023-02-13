import React, {useMemo, useState} from 'react';
import {Animated, Image, TouchableOpacity, View} from 'react-native';

import {useSelector} from 'react-redux';

import {getMoreFilms} from '@src/navigation/FilmsScreen/fetchFilmsScreen';

import BlockWrapFilms from '@src/components/BlockWrapFilms/BlockWrapFilms';
import GradientButton from '@src/components/GradientButton/GradientButton';
import StatusBarBottom from '@src/components/StatusBar/StatusBarBottom';
import StatusBarTop from '@src/components/StatusBar/StatusBarTop';

import {getStyle} from './FilmsScreen.style';

import type {
  NativeStackProps,
  TNewFilms,
  TStoreReducers,
} from '@src/constants/types';

const FilmsScreen = ({navigation}: NativeStackProps): JSX.Element => {
  const [dataFilms, setDataFilms] = useState<TNewFilms[]>(
    useSelector((store: TStoreReducers) => store.filmsState.popularFilms),
  );
  const [pageFilms, setPageFilms] = useState(2);
  const styles = useMemo(() => getStyle(), []);

  const getFilms = (): void => {
    getMoreFilms(pageFilms).then(res => setDataFilms([...dataFilms, ...res]));
    setPageFilms(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBarTop />
      <Animated.ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('@assets/icons/btnBack.png')} />
        </TouchableOpacity>
        <BlockWrapFilms popularFilms={dataFilms} />
        <GradientButton onPress={getFilms} />
      </Animated.ScrollView>
      <StatusBarBottom />
    </View>
  );
};

export default FilmsScreen;
