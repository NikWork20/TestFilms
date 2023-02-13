import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    scrollContainer: {marginLeft: 5},
    viewContainer: {alignItems: 'center', marginRight: 15},
    rating: {
      backgroundColor: 'green',
      width: 27,
      height: 17,
      borderRadius: 14,
      zIndex: 1,
      borderColor: '#003a00',
      borderWidth: 1,
      marginRight: 8,
    },
    textRating: {
      textAlign: 'center',
      fontSize: 11,
      fontFamily: 'BenchNine-Bold',
      fontStyle: 'normal',
      color: 'black',
    },
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
    fastImg: {
      width: 101,
      height: 154,
      borderRadius: 12,
      marginTop: -10,
      marginRight: 12,
      zIndex: 0,
    },
  });
  return styles;
};
