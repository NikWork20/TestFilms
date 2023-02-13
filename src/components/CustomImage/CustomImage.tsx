import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {CustomImageProps} from '@src/constants/Interface';

const width = Dimensions.get('window').width;

const CustomImage = ({item}: CustomImageProps) => {
  const [isLoad, setIsLoad] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity
      style={!isLoad ? styles.container : {}}
      onPress={() => navigation.navigate('ScreenInfo', {item: item})}>
      <FastImage
        style={isLoad ? styles.fastImg : {...styles.fastImg, opacity: 0}}
        source={{
          uri: item.posterUrlPreview,
        }}
        resizeMode={FastImage.resizeMode.cover}
        onLoad={() => setIsLoad(true)}
      />
      {!isLoad && (
        <View style={styles.containerIndicator}>
          <ActivityIndicator size={'small'} color="orange" />
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: 'gray',
    width: width * 0.29,
    marginTop: -10,
    height: 164,
  },
  containerIndicator: {
    borderRadius: 12,
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1,
    position: 'absolute',
  },
  fastImg: {
    height: 164,
    borderRadius: 12,
    zIndex: 0,
    width: width * 0.29,
    marginTop: -10,
  },
});
export default CustomImage;
