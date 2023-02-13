import {StyleSheet} from 'react-native';

export const getStyle = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'black',
      height: '100%',
    },
    indicator: {
      width: '100%',
      height: 225,
      borderRadius: 30,
      justifyContent: 'center',
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
    },
    preloadContainer: {
      borderColor: 'gray',
      height: 225,
      width: '100%',
      borderRadius: 30,
      backgroundColor: '#2f2f2f',
    },
    loadContainer: {
      height: 230,
      borderRadius: 30,
      width: '99%',
    },
    notFound: {
      borderColor: 'gray',
      height: 235,
    },
    imageBack: {
      height: 235,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontFamily: 'BenchNine-Bold',
      fontSize: 25,
      textAlign: 'center',
    },
  });
};
