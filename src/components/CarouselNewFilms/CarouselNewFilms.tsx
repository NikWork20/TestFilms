import React, {useEffect, useMemo} from 'react';
import {Animated, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {getNewFilms} from '@src/store/slices/filmsSlice';

import CustomImage from '@src/components/CustomImage/CustomImage';

import {getStyle} from './CarouselNewFilms.style';

import type {TStoreReducers} from '@src/constants/types';
import type {AppDispatch} from '@src/store';

const CarouselNewFilms = (): JSX.Element => {
  const newFilms = useSelector(
    (store: TStoreReducers) => store.filmsState.newFilms,
  );
  const dispatch = useDispatch<AppDispatch>();
  const styles = useMemo(() => getStyle(), []);

  useEffect(() => {
    dispatch(getNewFilms());
  }, []);

  return (
    <View style={{height: 220}}>
      <Text style={styles.title}>NEW FILMS</Text>
      <Animated.ScrollView
        horizontal={true}
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}>
        {newFilms?.map(item => (
          <View style={styles.viewContainer} key={item.kinopoiskId}>
            <View style={styles.rating}>
              <Text style={styles.textRating}>{item.ratingKinopoisk}</Text>
            </View>
            <CustomImage item={item} />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default CarouselNewFilms;
