import {StyleSheet} from 'react-native';

export const getStyle = () => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      zIndex: 1,
      position: 'absolute',
    },
    imageBack: {
      width: '100%',
      height: 320,
      zIndex: 0,
    },
    imageProfile: {width: 31, height: 29},
    touchable: {
      marginTop: 10,
      marginRight: 10,
      width: 41,
      height: 39,
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchableBack: {
      width: 58,
      height: 53,
      justifyContent: 'center',
      alignItems: 'center',
    },
    indicator: {
      width: '100%',
      height: 320,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      justifyContent: 'center',
      alignSelf: 'center',
      zIndex: 0,
      position: 'absolute',
      backgroundColor: '#2f2f2f',
    },
    imageOpacity: {width: '100%', height: 320, zIndex: 0, opacity: 0},
  });
};
