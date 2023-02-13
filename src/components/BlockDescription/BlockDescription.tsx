import React, {useMemo} from 'react';
import {Text, View} from 'react-native';

import {useSelector} from 'react-redux';

import {getStyle} from './BlockDescription.style';

import {DescConst} from '@src/constants/textConst';
import type {TStoreReducers} from '@src/constants/types';

const BlockDescription = () => {
  const infoFilm = useSelector(
    (store: TStoreReducers) => store.filmsState.infoFilm,
  );
  const styles = useMemo(() => getStyle(), []);
  return (
    <View style={styles.block}>
      <View style={styles.containerTouch}>
        <View style={styles.touchLine} />
        <View>
          <Text style={styles.title}>{DescConst.OVERVIEW}</Text>
        </View>
        <View style={styles.touchLine} />
      </View>
      <View style={styles.containerDesc}>
        <Text style={styles.description}>{infoFilm?.description}</Text>
        <View style={styles.containerInfo}>
          <Text style={styles.titleDesc}>{DescConst.RELEASE}</Text>
          <Text style={styles.titleInfo}>{infoFilm?.startYear}</Text>
          <Text style={styles.titleDesc}>{DescConst.RATING}</Text>
          <Text style={styles.titleInfo}>{infoFilm?.ratingKinopoisk}</Text>
          <Text style={styles.titleDesc}>{DescConst.GENRE}</Text>
          {infoFilm?.genres?.map((element, index) => (
            <Text key={index} style={styles.titleInfo}>
              {element.genre}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BlockDescription;
