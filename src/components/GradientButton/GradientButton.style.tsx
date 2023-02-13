import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {alignItems: 'center', marginVertical: 20},
    gradient: {
      width: 252,
      height: 43,
      borderRadius: 67,
    },
    press: {
      backgroundColor: 'black',
      width: 250,
      height: 40,
      marginHorizontal: 1,
      marginVertical: 1,
      borderRadius: 67,
    },
    title: {
      width: '100%',
      textAlign: 'center',
      marginVertical: 5,
      fontSize: 20,
      color: '#ffffff',
      fontFamily: 'BenchNine-Bold',
      fontStyle: 'normal',
      marginRight: 20,
    },
  });
  return styles;
};
