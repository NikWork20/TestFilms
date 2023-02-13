import React, {useEffect, useMemo} from 'react';
import {Animated} from 'react-native';

import {useDispatch} from 'react-redux';

import {
  clearInfoFilm,
  clearTrailer,
  getInfoFilm,
  getInfoTrailer,
} from '@src/store/slices/filmsSlice';

import BlockDescription from '@src/components/BlockDescription/BlockDescription';
import BlockTrailer from '@src/components/BlockTrailer/BlockTrailer';
import HeaderScreenInfo from '@src/components/HeaderScreenInfo/HeaderScreenInfo';
import StatusBarBottom from '@src/components/StatusBar/StatusBarBottom';
import StatusBarTop from '@src/components/StatusBar/StatusBarTop';

import {getStyle} from './ScreenInfo.style';

import type {CustomImageProps} from '@src/constants/Interface';
import type {DrawerScreen} from '@src/constants/types';
import type {AppDispatch} from '@src/store';

const ScreenInfo = ({route}: DrawerScreen): JSX.Element => {
  const {item} = route.params as CustomImageProps;
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getInfoTrailer(item.kinopoiskId));
    dispatch(getInfoFilm(item.kinopoiskId));
    return () => {
      dispatch(clearTrailer());
      dispatch(clearInfoFilm());
    };
  }, [dispatch, item.kinopoiskId]);

  return (
    <Animated.ScrollView style={styles.container}>
      <StatusBarTop />
      <HeaderScreenInfo image={item.posterUrl} />
      <BlockTrailer image={item.posterUrl} />
      <BlockDescription />
      <StatusBarBottom />
    </Animated.ScrollView>
  );
};

export default ScreenInfo;
