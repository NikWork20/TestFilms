import React, {useMemo, useState} from 'react';
import {ActivityIndicator, ImageBackground, Text, View} from 'react-native';
import {URL} from 'react-native-url-polyfill';
import YoutubePlayer from 'react-native-youtube-iframe';

import {useSelector} from 'react-redux';

import {getStyle} from './BlockTrailer.style';

import type {IHeaderScreenInfo} from '@src/constants/Interface';
import type {TStoreReducers} from '@src/constants/types';

const BlockTrailer = ({image}: IHeaderScreenInfo): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingTrailer, setLoadingTrailer] = useState<boolean>(false);
  const styles = useMemo(() => getStyle(), []);

  const trailer = useSelector(
    (store: TStoreReducers) => store.filmsState.trailer[0],
  );
  const getId = () => {
    const urlId = new URL(trailer.url ? trailer.url : '');
    if (urlId?.host) {
      const url: string | null =
        urlId.host === 'youtu.be'
          ? urlId.pathname.slice(1)
          : urlId.searchParams.get('v');

      return (
        <View style={!loading ? styles.preloadContainer : styles.loadContainer}>
          <YoutubePlayer
            height={235}
            play={false}
            videoId={url ? url : ''}
            webViewStyle={!loading && {opacity: 0}}
            onReady={() => setLoading(true)}
          />
          {!loading && (
            <View style={styles.indicator}>
              <ActivityIndicator size={'large'} color="orange" />
            </View>
          )}
        </View>
      );
    }
  };

  const notFoundTrailer = () => {
    setTimeout(() => {
      setLoadingTrailer(true);
    }, 5000);
    if (!loadingTrailer) {
      return (
        <View style={styles.preloadContainer}>
          <View style={styles.indicator}>
            <ActivityIndicator size={'large'} color="orange" />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.notFound}>
        <ImageBackground
          blurRadius={15}
          source={{uri: image}}
          style={styles.imageBack}
          borderRadius={30}>
          <Text style={styles.text}>Трейлер по данному фильму отсутсвует</Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={{marginTop: 30}}>
      {trailer?.url ? getId() : notFoundTrailer()}
    </View>
  );
};

export default BlockTrailer;
