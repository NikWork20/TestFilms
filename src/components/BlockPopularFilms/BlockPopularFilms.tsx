import React, {useEffect, useMemo} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppDispatch} from '@src/store';
import {getPopularFilms} from '@src/store/slices/filmsSlice';

import BlockWrapFilms from '@src/components/BlockWrapFilms/BlockWrapFilms';

import {getStyle} from './BlockPopularFilms.style';

import type {TStoreReducers} from '@src/constants/types';

const BlockPopularFilms = (): JSX.Element => {
  const popularFilms = useSelector(
    (store: TStoreReducers) => store.filmsState.popularFilms,
  );
  const dispatch = useDispatch<AppDispatch>();
  const styles = useMemo(() => getStyle(), []);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    dispatch(getPopularFilms());
  }, []);

  return (
    <View style={{height: 400}}>
      <View style={styles.viewText}>
        <Text style={styles.title}>POPULAR RIGHT NOW</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllFilms')}>
          <Text style={styles.title}>{'SEE ALL >'}</Text>
        </TouchableOpacity>
      </View>
      <BlockWrapFilms popularFilms={[...popularFilms].splice(0, 6)} />
    </View>
  );
};

export default BlockPopularFilms;
