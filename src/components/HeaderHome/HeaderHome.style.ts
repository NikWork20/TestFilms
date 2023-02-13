import {StyleSheet} from 'react-native';

export const getStyle = () => {
  return StyleSheet.create({
    containerDrawer: {
      marginTop: 9,
      marginLeft: 3,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imageUser: {
      marginTop: 15,
      marginRight: 15,
    },
    imageBurger: {
      width: 30,
      height: 25,
    },
  });
};
