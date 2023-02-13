import {StyleSheet} from 'react-native';

export const getStyle = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      height: '100%',
    },
    scrollContainer: {backgroundColor: 'rgba(0,0,0,0.6)'},
    imageBack: {
      width: '100%',
      height: 320,
      zIndex: 0,
    },
    imageOpacity: {width: '100%', height: 320, zIndex: 0, opacity: 0},
    indicator: {
      width: '100%',
      height: 320,
      borderRadius: 12,
      justifyContent: 'center',
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
    },
    imageBlock: {
      width: '100%',
      height: '85%',
      marginBottom: 20,
    },
    blockCarousel: {
      backgroundColor: 'rgba(0,0,0,0.7)',
      width: '100%',
      height: '85%',
    },
  });
};
