import {StyleSheet} from 'react-native';

export const getStyle = () => {
  return StyleSheet.create({
    viewText: {flexDirection: 'row', justifyContent: 'space-between'},
    title: {
      marginTop: 10,
      marginLeft: 10,
      marginBottom: 5,
      fontSize: 20,
      color: 'orange',
      fontFamily: 'BenchNine-Bold',
      fontStyle: 'normal',
      marginRight: 20,
    },
  });
};
