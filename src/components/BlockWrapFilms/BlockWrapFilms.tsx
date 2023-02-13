import React, {useMemo} from 'react';
import {Text, View} from 'react-native';

import CustomImage from '@src/components/CustomImage/CustomImage';

import {getStyle} from './BlockWrapFilms.style';

import {IPopularFilms} from '@src/constants/Interface';

const BlockWrapFilms = ({popularFilms}: IPopularFilms) => {
  const styles = useMemo(() => getStyle(), []);

  const getItems = (item: any, index: any) => {
    if (item.ratingKinopoisk) {
      return (
        <View style={styles.viewContainer} key={item.kinopoiskId + index}>
          <View style={styles.rating}>
            <Text style={styles.textRating}>{item.ratingKinopoisk}</Text>
          </View>
          <CustomImage item={item} />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.filmsContainer}>{popularFilms?.map(getItems)}</View>
  );
};

export default BlockWrapFilms;
