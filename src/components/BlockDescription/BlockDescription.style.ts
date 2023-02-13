import {StyleSheet} from 'react-native';

export const getStyle = () => {
  return StyleSheet.create({
    title: {
      width: 120,
      fontSize: 22,
      textAlign: 'center',
      color: 'white',
    },
    titleDesc: {
      fontSize: 15,
      marginRight: 10,
      color: '#7B6844',
      marginTop: 5,
    },
    titleInfo: {
      fontSize: 15,
      color: 'white',
    },
    description: {
      width: '60%',
      fontSize: 13,
      lineHeight: 14,
      color: 'white',
      textAlign: 'justify',
    },
    containerInfo: {marginLeft: 19},
    containerDesc: {flexDirection: 'row'},
    block: {marginTop: 30},
    containerTouch: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    touchLine: {flex: 1, height: 1, backgroundColor: 'white'},
  });
};
